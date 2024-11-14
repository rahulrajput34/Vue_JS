import { defineStore } from "pinia";
export const useTeamStore = defineStore("team", {
  // State
  state: () => ({
    name: '',
    spots: 0,
    teamMembers: []
  }),

  // Actions
  actions: {
    async fill() {
      let r = await import('@/team.json');
      let data = r.default;
      this.name = data.name;
      this.spots = data.spots;
      this.teamMembers = data.teamMembers;
    }
  },

  // Getters
  getters: {
    spotsRemaining() {
      return this.spots - this.teamMembers.length;
    }
  }
});
