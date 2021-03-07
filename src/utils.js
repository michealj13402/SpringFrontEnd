export const login = (credential) => {
  const loginUrl = `/login?username=${credential.username}&password=${credential.password}`;

  return fetch(loginUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 200 || (response.redirected && response.url.includes('error'))) {
      throw Error('Fail to log in');
    }
  })
}
 
const menusUrl = '/menus?lat=37.36&lon=-122.03';
 
export const getMenus = () => {
  return fetch(menusUrl).then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to get menus');
    }
 
    return response.json();
  })
}

export const getCart = () => {
  return fetch('/cart').then((response) => {
    if (response.status !== 200) {
      throw Error('Fail to get shopping cart data');
    }
 
    return response.json();
  })
}

export const addItemToCart = (itemId) => {
  return fetch(`/order/${itemId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((response) => {
    if (response.status !== 201) {
      throw Error('Fail to add menu item to shopping cart');
    }
  })
}



