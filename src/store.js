import Vue from 'vue';

export default Vue.observable({
  debug: true,
  state: {
    levels: {
      data_structures: -1,
      algorithms: -1,
      systems_programming: -1,
      source_code_version_control: -1,
      build_automation: -1,
      automated_testing: -1,
      problem_decomposition: -1,
      systems_decomposition: -1,
      communication: -1,
      code_organization_within_a_file: -1,
      code_organization_across_files: -1,
      source_tree_organization: -1,
      code_readability: -1,
      defensive_coding: -1,
      error_handling: -1,
      ide: -1,
      api: -1,
      frameworks: -1,
      requirements: -1,
      scripting: -1,
      database: -1,
      tool_knowledge: -1,
      languages_exposed_to: -1,
      codebase_knowledge: -1,
      knowledge_of_upcoming_technologies: -1,
      platform_internals: -1,
      books: -1,
      blogs: -1,
      languages_with_professional_experience: -1,
      platforms_with_professional_experience: -1,
      years_of_professional_experience: -1,
      domain_knowledge: -1,
    },
  },
  setLevelAction(topic, newLevel) {
    if (this.debug) {
      // eslint-disable-next-line
      console.log('setMessageAction triggered with', topic, newLevel);
    }
    localStorage[topic] = newLevel;
    this.state.levels[topic] = newLevel;
  },
});
