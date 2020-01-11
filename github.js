class Github {
  constructor() {
    this.client_id = '93b57be0978ab02e53ab';
    this.client_secret = 'f51221d40da8463cb8aa103ad8b77502b2354632';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}