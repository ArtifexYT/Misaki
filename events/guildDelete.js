module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run(guild) {
    this.client.user.setPresence({game: {name: `${this.client.settings.get("default").prefix}help | ${this.client.guilds.size} Servers`, type:0}});
    this.client.logger.log(`A guild has been left: ${guild.name} (${guild.id}) with ${guild.memberCount - 1} members`);
    this.client.settings.delete(guild.id);
  }
};
