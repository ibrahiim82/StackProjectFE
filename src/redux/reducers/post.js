

const postReducer = (state = {posts: []}, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return {
                posts : action.payload
            }
        case "CREATE_POST":
            return {
                posts : [...state.posts, action.payload]
            }
        case "UPDATE_POST":
            return {
                posts : state.posts.map(post => post._id === action.payload._id ? action.payload : post)
            }
        case "DELETE_POST":
            return {
                posts : state.posts.filter(post => post._id !== action.payload)
            }
        default:
            return state
    }
}

export default postReducer


/*

switch (action.type)  

Gelen action.type'a göre hangi işlem yapılacağını belirler.
dispatch({type: "GET_POSTS", payload: [...]}) gibi bir action geldiğinde buna göre karar verir.


case "GET_POSTS":
    return {
        posts : action.payload
    }
Eğer GET_POSTS tipi bir action gelirse:
action.payload genelde veritabanından çekilen post listesidir.
Bu verilerle posts'u günceller.
Örn: payload = [{id:1, title:'a'}, {id:2, title:'b'}]


case "CREATE_POST":
    return {
        posts : [...state.posts, action.payload]
    }
Yeni bir post ekleniyorsa bu case çalışır.
Mevcut post'lar (state.posts) korunur.
Yeni post (action.payload) sona eklenir.
[...state.posts, action.payload] → yeni array oluşturur (immutability)


case "UPDATE_POST":
    return {
        posts : state.posts.map(post =>
            post._id === action.payload._id ? action.payload : post
        )
    }
Bir post güncellenmek istendiğinde bu case çalışır.
Tüm post'lar .map() ile dönülür.
Eğer post._id, güncellenen post'un id'siyle eşleşirse o post yenilenir (action.payload)
Eşleşmiyorsa olduğu gibi kalır.


case "DELETE_POST":
    return {
        posts : state.posts.filter(post => post._id !== action.payload)
    }
Belirli bir post silinmek istendiğinde çalışır.
state.posts içinden action.payload'a eşit olan post._id'ye sahip post'u çıkarır.
filter(...) ile yeni array döner.


default:
    return state

Yukarıdaki case’lerin hiçbiriyle eşleşmeyen bir action gelirse,
Mevcut state olduğu gibi geri döner.
Yani değişiklik yapılmaz.

*/


        // case "UPDATE_POST":
        //     return {
        //         posts : [state.posts.map(post => post._id === action.payload._id ? action.payload : post)]
        //     }
        // case "DELETE_POST":
        //     return {
        //         posts : [state.posts.filter((post) => post._id !== action.payload)]
        //     }

//
