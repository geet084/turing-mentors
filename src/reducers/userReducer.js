export const userReducer = (state = {}, action) => {
  state = {
    first_name: "Jeff",
    last_name: "Casimir",
    identities: [1],
    cohort: 1401,
    program: "BE",
    current_job: "Director",
    slack: "@j3",
    email: "jeff@email.com",
    phone: "3037313117",
    linkedin: 'jeff-casimir-839123',
    preferred_method: '1',
    location: "Denver, CO",
    background: "Things",
    availability: {
      0: [true, false, false],
      1: [true, false, false],
      2: [true, false, false],
      3: [true, false, false],
      4: [true, false, false],
      5: [false, true, false],
      6: [false, true, false],
    },
    tech_skills: ["1", "2", "7"],
    non_tech_skills: ["1", "3", "5"]
  }
  switch (action.type) {
    default:
      return state;
  }
}
