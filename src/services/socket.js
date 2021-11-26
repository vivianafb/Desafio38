import socketIo from 'socket.io';
import { formatMessages } from '../utils/messages';
import {mensajesAPI} from '../apis/mensajes';

const data = {
  email: undefined,
  mensaje: undefined,
};

export const initWsServer = (server) => {
  const io = socketIo(server);

  io.on('connection', async (socket) => {
    console.log('Nueva Conexion establecida!');
     let msges = await mensajesAPI.get();
     socket.emit('messages', msges);
     

    socket.on('disconnect', () => {
      const user = getCurrentUser(socket.client.id);
      if (user) {
        removeUser(socket.client.id);
        data.email = 'CHATBOT';
        data.mensaje = `${user.email} a dejado el chat`;
        io.to(user.room).emit('message', formatMessages(data));

      }
    });

    socket.on('newMessage', async (msge) => {
      mensajesAPI
        .save(msge)
        .then(() => {
          socket.emit('save message success', null);
          mensajesAPI
            .get()
            .then(messages => {
              io.emit('messages', messages);
            })
            .catch(e => {
              socket.emit('messages error', {
                error: e.error,
                message: e.message,
              });
            });
        })
        .catch(e => {
          socket.emit('save message error', {
            error: e.error,
            message: e.message,
          });
        });
    });
  });

  return io;
};
