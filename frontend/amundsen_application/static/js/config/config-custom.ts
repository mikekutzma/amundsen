// This file should be used to add new config variables or overwrite defaults from config-default.ts

import { AppConfigCustom } from './config-types';

const configCustom: AppConfigCustom = {
  analytics: {
    plugins: [],
  },
  announcements: {
    enabled: false,
  },
  browse: {
    curatedTags: [],
    hideNonClickableBadges: false,
    showAllTags: true,
    showBadgesInHome: true,
  },
  indexDashboards: {
    enabled: true,
  },
  indexFeatures: {
    enabled: false,
  },
  indexUsers: {
    enabled: true,
  },
  issueTracking: {
    enabled: false,
    issueDescriptionTemplate: '',
    projectSelection: {
      enabled: false,
      inputHint: '',
      title: 'Issue project key (optional)',
    },
  },
  mailClientFeatures: {
    feedbackEnabled: false,
    notificationsEnabled: false,
  },
  productTour: {},
  userIdLabel: 'email address',
};

export default configCustom;
