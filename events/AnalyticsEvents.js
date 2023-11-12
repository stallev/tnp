const EventCategories = {
  i_need_help_home_page_button_click: 'need_help_home_page_button_click',
  i_want_to_help_home_page_button_click: 'want_to_help_home_page_button_click',
  redirect_from_landing_cat: ' redirect_from_landing_cat',
  blog_page_opened: 'blog_page_opened',
  request_opened_by_other: 'request_opened_by_other',
  request_creation: 'request_creation',
  main_page_requests_filtering: 'main_page_requests_filtering',
  main_page_requests_change_location: 'main_page_requests_change_location',
  main_page_move_map_zoom: 'main_page_move_map_zoom',
  user_chat_opened_from_request: 'user_chat_opened_from_request',
  user_registration: 'user_registration',
  request_to_favorites: 'request_to_favorites',
  sharing_by_socials: 'sharing_by_socials',
  request_comment_creation: 'request_comment_creation',
  contact_via_contact_form: 'contact_via_contact_form',
  language_changing: 'language_changing',
};

export const AnalyticEventParameters = {
  category: 'category',
  label: 'label',
};

export const ContactFormTypes = {
  claim: 'claim',
  question: 'question',
};

export const AuthTypes = {
  facebook: 'byFacebook',
  google: 'byGoogle',
  email: 'byEmail',
};

export const AnalyticsEvents = {
  INeedHelpLandingPageButtonClick: {
    [AnalyticEventParameters.category]: EventCategories.i_need_help_home_page_button_click,
  },
  IWantToHelpLandingPageButtonClick: {
    [AnalyticEventParameters.category]: EventCategories.i_want_to_help_home_page_button_click,
  },
  RedirectFromLandingCategoryToMainPage: {
    [AnalyticEventParameters.category]: EventCategories.redirect_from_landing_cat,
  },
  BlogPageOpened: {
    [AnalyticEventParameters.category]: EventCategories.blog_page_opened,
  },
  RequestOpenedByOther: {
    [AnalyticEventParameters.category]: EventCategories.request_opened_by_other,
  },
  RequestCreation: {
    [AnalyticEventParameters.category]: EventCategories.request_creation,
  },
  MainPageRequestsFiltering: {
    [AnalyticEventParameters.category]: EventCategories.main_page_requests_filtering,
  },
  MainPageChangeLocation: {
    [AnalyticEventParameters.category]: EventCategories.main_page_requests_change_location,
  },
  MainPageMoveMapZoom: {
    [AnalyticEventParameters.category]: EventCategories.main_page_move_map_zoom,
  },
  RequestCommentCreation: {
    [AnalyticEventParameters.category]: EventCategories.request_comment_creation,
  },
  UserChatOpened: {
    [AnalyticEventParameters.category]: EventCategories.user_chat_opened_from_request,
  },
  UserRegistration: {
    [AnalyticEventParameters.category]: EventCategories.user_registration,
  },
  RequestToFavorites: {
    [AnalyticEventParameters.category]: EventCategories.request_to_favorites,
  },
  SharingBySocials: {
    [AnalyticEventParameters.category]: EventCategories.sharing_by_socials,
  },
  ContactViaContactForm: {
    [AnalyticEventParameters.category]: EventCategories.contact_via_contact_form,
  },
  LanguageChanging: {
    [AnalyticEventParameters.category]: EventCategories.language_changing,
  },
};
