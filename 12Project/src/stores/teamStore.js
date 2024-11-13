import { defineStore } from "pinia";


// pinia make the all the state reactive
export const useTeamStore = defineStore("team", {
  // State
  state: () => ({
      name: '',
      spots: 0,
      teamMembers: []
  }),
  // Actions
  // We sometime get the data from the backend and set over here in the state
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
  // We can also set the getter over here to get the value
  getters: {
    spotsRemaining() {
      return this.spots - this.teamMembers.length;
    }
  }
});
