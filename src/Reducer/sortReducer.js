export const sortReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "HIGH-TO-LOW": {
      return { ...state, sort: action.type };
    }
    case "LOW-TO-HIGH": {
      return { ...state, sort: action.type };
    }
    console.log(action.type)


   /*  category according dispatch  */

    case "saree":
        return {...state,categories:{...state.categories,[action.type]:!state.categories[action.type]}
    }
    case "dress":
        return {...state,categories:{...state.categories,[action.type]:!state.categories[action.type]}
    }
    case "kurti":
        return {...state,categories:{...state.categories,[action.type]:!state.categories[action.type]}
    }
    case "western":
        return {...state,categories:{...state.categories,[action.type]:!state.categories[action.type]}
    }
    case "skirt":
        return {...state,categories:{...state.categories,[action.type]:!state.categories[action.type]}
    }
    case "nightwear":
        return {...state,categories:{...state.categories,[action.type]:!state.categories[action.type]}
    }

   /*  brand according dispatch  */
    case "shangrilla":
        return {...state,categories:{...state.categories,[action.type]:!state.categories[action.type]}
    }
    case "manthan":
        return {...state,categories:{...state.categories,[action.type]:!state.categories[action.type]}
    }
    case "dnmx":
        return {...state,categories:{...state.categories,[action.type]:!state.categories[action.type]}
    }
    case "vishal":
        return {...state,categories:{...state.categories,[action.type]:!state.categories[action.type]}
    }
    case "mansarover":
        return {...state,categories:{...state.categories,[action.type]:!state.categories[action.type]}
    }


    // case "CATEGORY":
    //   return {
    //     ...state,
    //     categories: {
    //       ...state.catergories,
    //       [action.payload.toLowerCase()]:
    //         (state.catergories[action.payload.toLowerCase()]??undefined) !==undefined? !state.catergories[action.payload.toLowerCase()] : false,
    //     },
    //   };
    // case "BRAND":
    //   return {
    //     ...state,
    //     brand: {
    //       ...state.brand,
    //       [action.payload.toLowerCase()]:
    //         !state.brand[action.payload.toLowerCase()] || false,
    //     },
    //   };
    default:
      return state;
  }
};
