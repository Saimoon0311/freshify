import React from 'react';

export const ApiPost = async (url, body) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  return fetch(url, {
    //   return fetch('http://localhost:5000/api/v1/auth/register', {
    method: 'POST',
    body: body,
    headers: myHeaders,
    redirect: 'follow',
  })
    .then(res => res.json())
    .then(json => {
      return {success: true, data: json};
    })
    .catch(error => {
      return {success: false, data: error};
    });
};

export const ApiGet = async url => {
  return fetch(url)
    .then(res => res.json())
    .then(json => {
      return {success: true, data: json};
    })
    .catch(error => {
      return {success: false, data: error};
    });
};

export const ApiPut = async (url, body) => {
  var myHeaders = new Headers();

  myHeaders.append('Content-Type', 'application/json');
  return fetch(url, {
    method: 'PUT',
    body: body,
    headers: myHeaders,
    redirect: 'follow',
  })
    .then(res => res.json())
    .then(json => {
      return {success: true, data: json};
    })
    .catch(error => {
      return {success: false, data: error};
    });
};

export const ApiDelete = async url => {
  return fetch(url, {
    method: 'DELETE',
    redirect: 'follow',
  })
    .then(res => res.json())
    .then(json => {
      return {success: true, data: json};
    })
    .catch(error => {
      return {success: false, data: error};
    });
};
