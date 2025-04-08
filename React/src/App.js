import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";



// array obj
const resList = [
  
    
  
        
          
            
            
          
                {
                  "info": {
                    "id": "10576",
                    "name": "Pizza Hut",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
                    "locality": "6th Block",
                    "areaName": "Koramangala",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                      "Pizzas"
                    ],
                    "avgRating": 4.3,
                    "parentId": "721",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "21K+",
                    "sla": {
                      "deliveryTime": 47,
                      "lastMileTravel": 0.9,
                      "serviceability": "SERVICEABLE",
                      "slaString": "45-50 mins",
                      "lastMileTravelString": "0.9 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 04:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {
                      
                    },
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "4.6",
                        "ratingCount": "3.3K+"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "5934",
                    "name": "Burger King",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
                    "locality": "Koramangala",
                    "areaName": "Koramangala",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                      "Burgers",
                      "American"
                    ],
                    "avgRating": 4.3,
                    "parentId": "166",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "100K+",
                    "sla": {
                      "deliveryTime": 38,
                      "lastMileTravel": 1.6,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "1.6 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 06:55:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        },
                        {
                          "imageId": "Rxawards/_CATEGORY-Burger.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                            },
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "60% OFF",
                      "subHeader": "UPTO ₹120"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "4.2",
                        "ratingCount": "4.0K+"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/burger-king-koramangala-rest5934",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "656392",
                    "name": "Subway",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/ccb97e93-5b1a-4e18-9dd7-3f635e2d5e94_656392.JPG",
                    "locality": "1st Block",
                    "areaName": "Koramangala",
                    "costForTwo": "₹350 for two",
                    "cuisines": [
                      "Sandwich",
                      "Salads",
                      "wrap",
                      
                    ],
                    "avgRating": 4.3,
                    "parentId": "2",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "3.4K+",
                    "sla": {
                      "deliveryTime": 25,
                      "lastMileTravel": 1.6,
                      "serviceability": "SERVICEABLE",
                      "slaString": "20-25 mins",
                      "lastMileTravelString": "1.6 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 03:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        },
                        {
                          "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                            },
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹119"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/subway-1st-block-koramangala-rest656392",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "390057",
                    "name": "NH1 Bowls - Highway To North",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/b1e9f652-dc8d-4789-9710-6485ec06846e_390057.jpg",
                    "locality": "6th Block",
                    "areaName": "Koramangala",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "North Indian",
                      "Punjabi",
                      "Home Food"
                    ],
                    "avgRating": 4.7,
                    "parentId": "22452",
                    "avgRatingString": "4.7",
                    "totalRatingsString": "1.0K+",
                    "sla": {
                      "deliveryTime": 15,
                      "lastMileTravel": 0.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "10-20 mins",
                      "lastMileTravelString": "0.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 02:00:00",
                      "opened": true
                    },
                    "badges": {
                      "textExtendedBadges": [
                        {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹139"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/nh1-bowls-highway-to-north-6th-block-koramangala-rest390057",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "643665",
                    "name": "WeFit - Protein Bowls, Salads & Sandwiches",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/3/01f48b92-adaf-444d-a404-f49d23f0bf6c_643665.jpg",
                    "locality": "Patel Narayana Reddy Layout",
                    "areaName": "Ejipura",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "Healthy Food",
                      "Salads",
                      "Keto",
                      "Snacks"
                    ],
                    "avgRating": 4.6,
                    "parentId": "355285",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "524",
                    "sla": {
                      "deliveryTime": 25,
                      "lastMileTravel": 0.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "20-30 mins",
                      "lastMileTravelString": "0.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 02:00:00",
                      "opened": true
                    },
                    "badges": {
                      "textExtendedBadges": [
                        {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "brand",
                          "fontColor": "#7E808C"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "brand"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/wefit-protein-bowls-salads-and-sandwiches-patel-narayana-reddy-layout-ejipura-rest643665",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "750225",
                    "name": "Daily Kitchen - Homely Meals",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750225.JPG",
                    "locality": "6TH BLOCK",
                    "areaName": "Koramangala",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "Home Food",
                      "Indian",
                      "North Indian",
                      "Thalis"
                    ],
                    "avgRating": 4.4,
                    "parentId": "444382",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "563",
                    "sla": {
                      "deliveryTime": 15,
                      "lastMileTravel": 0.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "10-20 mins",
                      "lastMileTravelString": "0.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 02:00:00",
                      "opened": true
                    },
                    "badges": {
                      "textExtendedBadges": [
                        {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/daily-kitchen-homely-meals-6th-block-koramangala-rest750225",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "681439",
                    "name": "LeanCrust Pizza- ThinCrust Experts",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/02dd8027-a849-4cc5-9411-ea8e8cc767f9_681439.jpg",
                    "locality": "6TH BLOCK",
                    "areaName": "Koramangala",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                      "Pizzas",
                      "Italian",
                      "Desserts"
                    ],
                    "avgRating": 4.6,
                    "parentId": "11216",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "424",
                    "sla": {
                      "deliveryTime": 25,
                      "lastMileTravel": 0.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "20-30 mins",
                      "lastMileTravelString": "0.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 02:00:00",
                      "opened": true
                    },
                    "badges": {
                      "textExtendedBadges": [
                        {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹159"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/leancrust-pizza-thincrust-experts-6th-block-koramangala-rest681439",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "622030",
                    "name": "MOJO Pizza - 2X Toppings",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/aa5a8dc4-5b73-4dfc-86d6-edc0f1855f54_622030.jpg",
                    "locality": "Patel Narayana Reddy Layout",
                    "areaName": "Koramangala",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "Pizzas",
                      "Italian",
                      "Fast Food",
                      "Desserts"
                    ],
                    "avgRating": 4.6,
                    "parentId": "11329",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "1.1K+",
                    "sla": {
                      "deliveryTime": 25,
                      "lastMileTravel": 0.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "20-30 mins",
                      "lastMileTravelString": "0.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 02:00:00",
                      "opened": true
                    },
                    "badges": {
                      "textExtendedBadges": [
                        {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹159"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/mojo-pizza-2x-toppings-patel-narayana-reddy-layout-koramangala-rest622030",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "534235",
                    "name": "Cheesecake & Co.",
                    "cloudinaryImageId": "b318c0b4bc2169550145ace1d6e791a2",
                    "locality": "Koramangala",
                    "areaName": "Koramangala",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "Bakery"
                    ],
                    "avgRating": 4.6,
                    "parentId": "387417",
                    "avgRatingString": "4.6",
                    "totalRatingsString": "3.1K+",
                    "sla": {
                      "deliveryTime": 24,
                      "lastMileTravel": 1,
                      "serviceability": "SERVICEABLE",
                      "slaString": "20-25 mins",
                      "lastMileTravelString": "1.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 00:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        },
                        {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                            },
                            {
                              "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "3.3",
                        "ratingCount": "115"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/cheesecake-and-co-koramangala-rest534235",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "671928",
                    "name": "KFC",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/377e9327-3ca7-48ac-b36c-96f5bf6e186a_671928.JPG",
                    "locality": "7th Block",
                    "areaName": "Koramangla",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                      "Burgers",
                      "Fast Food",
                      "Rolls & Wraps"
                    ],
                    "avgRating": 4.3,
                    "parentId": "547",
                    "avgRatingString": "4.3",
                    "totalRatingsString": "3.9K+",
                    "sla": {
                      "deliveryTime": 31,
                      "lastMileTravel": 1.2,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "1.2 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 02:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "20% OFF",
                      "subHeader": "UPTO ₹50"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/kfc-7th-block-koramangla-rest671928",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "11211",
                    "name": "Taco Bell",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/4/95cca2be-d63c-4c0c-9014-10ecb27e31f6_11211.JPG",
                    "locality": "Koramangala",
                    "areaName": "Koramangala",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                      "Mexican",
                      "Fast Food",
                      "Snacks"
                    ],
                    "avgRating": 4.4,
                    "parentId": "1557",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "25K+",
                    "sla": {
                      "deliveryTime": 27,
                      "lastMileTravel": 1.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "1.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 01:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "50% OFF",
                      "subHeader": "UPTO ₹100"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "4.2",
                        "ratingCount": "5.8K+"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/taco-bell-koramangala-rest11211",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "18973",
                    "name": "Nandhana Palace",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
                    "locality": "Koramangala",
                    "areaName": "Koramangala",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                      "Biryani",
                      "Andhra",
                      "South Indian",
                      "North Indian"
                    ],
                    "avgRating": 4.4,
                    "parentId": "2120",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "38K+",
                    "sla": {
                      "deliveryTime": 26,
                      "lastMileTravel": 0.5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "0.5 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 02:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        },
                        {
                          "imageId": "Rxawards/_CATEGORY-Andhra.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {
                      
                    },
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                            },
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Andhra.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "4.3",
                        "ratingCount": "8.5K+"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/nandhana-palace-koramangala-rest18973",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "158855",
                    "name": "Candice's Gourmet Sandwiches & Wraps",
                    "cloudinaryImageId": "d1331113564b015c9d55c48ff48a2553",
                    "locality": "5th Block",
                    "areaName": "Koramangala",
                    "costForTwo": "₹600 for two",
                    "cuisines": [
                      "Salads",
                      "sandwich",
                      "Snacks"
                    ],
                    "avgRating": 4.5,
                    "parentId": "465403",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "4.0K+",
                    "sla": {
                      "deliveryTime": 33,
                      "lastMileTravel": 0.2,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "0.2 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-05 23:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        },
                        {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                            },
                            {
                              "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "50% OFF",
                      "subHeader": "UPTO ₹100"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-rest158855",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "65797",
                    "name": "Leon's - Burgers & Wings (Leon Grill)",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg",
                    "locality": "Koramangala",
                    "areaName": "Koramangala",
                    "costForTwo": "₹300 for two",
                    "cuisines": [
                      "American",
                      "Snacks",
                      "Turkish",
                      "Portuguese",
                      "Continental"
                    ],
                    "avgRating": 4.5,
                    "parentId": "371281",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "55K+",
                    "sla": {
                      "deliveryTime": 36,
                      "lastMileTravel": 1.4,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "1.4 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-05 23:59:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "50% OFF",
                      "subHeader": "UPTO ₹100"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "4.5",
                        "ratingCount": "4.6K+"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/leons-burgers-and-wings-leon-grill-koramangala-rest65797",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "23678",
                    "name": "McDonald's",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/edc568f6-6813-4f2d-a670-911788f1f04f_23678.jpg",
                    "locality": "5th Block",
                    "areaName": "Koramangala",
                    "costForTwo": "₹400 for two",
                    "cuisines": [
                      "Burgers",
                      "Beverages",
                      "Cafe",
                      "Desserts"
                    ],
                    "avgRating": 4.5,
                    "parentId": "630",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "63K+",
                    "sla": {
                      "deliveryTime": 32,
                      "lastMileTravel": 1.3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "1.3 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 02:55:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        },
                        {
                          "imageId": "Rxawards/_CATEGORY-Burger.png",
                          "description": "Delivery!"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                            },
                            {
                              "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "20% OFF",
                      "subHeader": "UPTO ₹50"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/mcdonalds-5th-block-koramangala-rest23678",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "430368",
                    "name": "Kebapci",
                    "cloudinaryImageId": "82cee87165a12942080a2df5a3b46fb9",
                    "locality": "Koramangala",
                    "areaName": "Koramangala",
                    "costForTwo": "₹600 for two",
                    "cuisines": [
                      "Turkish",
                      "Middle Eastern",
                      "Lebanese"
                    ],
                    "avgRating": 4.4,
                    "parentId": "17445",
                    "avgRatingString": "4.4",
                    "totalRatingsString": "2.4K+",
                    "sla": {
                      "deliveryTime": 32,
                      "lastMileTravel": 0.4,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "0.4 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-05 23:59:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        },
                        {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      ]
                    },
                    "isOpen": true,
                    "aggregatedDiscountInfoV2": {
                      
                    },
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                            },
                            {
                              "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "4.3",
                        "ratingCount": "4.1K+"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/kebapci-koramangala-rest430368",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "41913",
                    "name": "Chinita Real Mexican Food",
                    "cloudinaryImageId": "29fc772cc06b07a4b018e4971d96c9a3",
                    "locality": "Koramangala",
                    "areaName": "Koramangala",
                    "costForTwo": "₹750 for two",
                    "cuisines": [
                      "Mexican",
                      "Salads",
                      "Desserts",
                      "Beverages"
                    ],
                    "avgRating": 4.5,
                    "parentId": "5064",
                    "avgRatingString": "4.5",
                    "totalRatingsString": "7.4K+",
                    "sla": {
                      "deliveryTime": 36,
                      "lastMileTravel": 0.2,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "0.2 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-05 23:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        },
                        {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                            },
                            {
                              "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "50% OFF",
                      "subHeader": "UPTO ₹100"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "4.2",
                        "ratingCount": "2.1K+"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/chinita-real-mexican-food-koramangala-rest41913",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "391005",
                    "name": "ZAZA Mughal Biryani",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/d8552b11-ea4b-46e6-8b5c-287640b049cf_391005.jpg",
                    "locality": "Patel Narayana Reddy Layout",
                    "areaName": "EJIPURA",
                    "costForTwo": "₹250 for two",
                    "cuisines": [
                      "Biryani",
                      "North Indian",
                      "Awadhi"
                    ],
                    "avgRating": 4.1,
                    "parentId": "22473",
                    "avgRatingString": "4.1",
                    "totalRatingsString": "332",
                    "sla": {
                      "deliveryTime": 15,
                      "lastMileTravel": 0.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "10-20 mins",
                      "lastMileTravelString": "0.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-06 02:00:00",
                      "opened": true
                    },
                    "badges": {
                      "textExtendedBadges": [
                        {
                          "iconId": "guiltfree/GF_Logo_android_3x",
                          "shortDescription": "options available",
                          "fontColor": "#7E808C"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "shortDescription": "options available"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹139"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/zaza-mughal-biryani-patel-narayana-reddy-layout-ejipura-rest391005",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "667571",
                    "name": "Popeyes",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/11/5e24e79a-fdf5-4c6c-b200-64aa6c40e2b4_667571.jpg",
                    "locality": "hosur Road Lakkasandra",
                    "areaName": "Koramangala",
                    "costForTwo": "₹500 for two",
                    "cuisines": [
                      "Burgers",
                      "Fast Food",
                      "Rolls & Wraps"
                    ],
                    "avgRating": 4,
                    "parentId": "397044",
                    "avgRatingString": "4.0",
                    "totalRatingsString": "2.5K+",
                    "sla": {
                      "deliveryTime": 30,
                      "lastMileTravel": 2.5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "2.5 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-05 23:00:00",
                      "opened": true
                    },
                    "badges": {
                      
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹179"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "4.1",
                        "ratingCount": "3.0K+"
                      },
                      "source": "GOOGLE",
                      "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/popeyes-hosur-road-lakkasandra-koramangala-rest667571",
                    "type": "WEBLINK"
                  }
                },
                {
                  "info": {
                    "id": "78511",
                    "name": "NIC Ice Creams",
                    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/8bdab243-cdea-48b6-b01e-5b2229208339_78511.JPG",
                    "locality": "8th Block",
                    "areaName": "Koramangala",
                    "costForTwo": "₹120 for two",
                    "cuisines": [
                      "Ice Cream",
                      "Desserts"
                    ],
                    "avgRating": 4.8,
                    "veg": true,
                    "parentId": "6249",
                    "avgRatingString": "4.8",
                    "totalRatingsString": "9.2K+",
                    "sla": {
                      "deliveryTime": 25,
                      "lastMileTravel": 1.6,
                      "serviceability": "SERVICEABLE",
                      "slaString": "20-25 mins",
                      "lastMileTravelString": "1.6 km",
                      "iconType": "ICON_TYPE_EMPTY"
                    },
                    "availability": {
                      "nextCloseTime": "2025-02-05 23:00:00",
                      "opened": true
                    },
                    "badges": {
                      "imageBadges": [
                        {
                          "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
                          "description": "bolt!"
                        }
                      ],
                      "textExtendedBadges": [
                        {
                          "iconId": "Ratnesh_Badges/test2.png",
                          "shortDescription": "Perfect ice cream delivery",
                          "fontColor": "#7E808C"
                        }
                      ]
                    },
                    "isOpen": true,
                    "type": "F",
                    "badgesV2": {
                      "entityBadges": {
                        "imageBased": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "bolt!",
                                "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                              }
                            }
                          ]
                        },
                        "textBased": {
                          
                        },
                        "textExtendedBadges": {
                          "badgeObject": [
                            {
                              "attributes": {
                                "description": "",
                                "fontColor": "#7E808C",
                                "iconId": "Ratnesh_Badges/test2.png",
                                "shortDescription": "Perfect ice cream delivery"
                              }
                            }
                          ]
                        }
                      }
                    },
                    "aggregatedDiscountInfoV3": {
                      "header": "60% OFF",
                      "subHeader": "UPTO ₹120"
                    },
                    "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                        "lottie": {
                          
                        },
                        "video": {
                          
                        }
                      }
                    },
                    "reviewsSummary": {
                      
                    },
                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                    "restaurantOfferPresentationInfo": {
                      
                    },
                    "externalRatings": {
                      "aggregatedRating": {
                        "rating": "--"
                      }
                    },
                    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                  },
                  "analytics": {
                    "context": "seo-data-a8dc16b6-ce14-453c-87a7-4b787d2ef376"
                  },
                  "cta": {
                    "link": "https://www.swiggy.com/city/bangalore/nic-ice-creams-8th-block-koramangala-rest78511",
                    "type": "WEBLINK"
                  }
                }
];
              
          


const AppLayout = () => {
  // console.log(<Body></Body>)
  return (
    <div className="App">
      <Header/> 
      <Outlet/>
      {/** if path = /  */}
      {/* <Body/> */}
      {/** if path = /about  */}
      {/* <About/>
      // * if path = /contact */}
      {/* <Contact/> */}

    </div>
  )


};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children:[

      {
        path: "/",
        element: <Body/>,
      },

      {
        path: "/about",
        element: <About/>,
      },
    
      {
        path: "/contact",
        element: <Contact/>,
      },

      {
        path: "/restaurants/:resId",
        // path: "/city/bangalore/:resId"
        element: <RestaurantMenu/>,
      },
    
    ],
    errorElement: <Error/>,
  },

  // {
  //   path: "/about",
  //   element: <About/>,
  // },

  // {
  //   path: "/contact",
  //   element: <Contact/>,
  // },


])

const root = ReactDOM.createRoot(document.getElementById("root"));
// to render component
// root.render(< AppLayout />);
root.render(< RouterProvider router= {appRouter} />);