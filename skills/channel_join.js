var debug = require('debug')('botkit:channel_join');

module.exports = function(controller) {

    controller.on('bot_channel_join', function(bot, message) {
        bot.reply(message, 'Wassup guys, thanks for inviting me to the channel.');
        controller.studio.run(bot, 'channel_join', message.user, message.channel).catch(function(err) {
            debug('Error: encountered an error loading onboarding script from Botkit Studio:', err);
        });
       
    });

}
