import React from 'react';

export const ApiPost = async (url, body, confirm) => {
  var myHeaders = new Headers();
  var formdata = new FormData();
  confirm == true
    ? formdata.append('slug', body)
    : myHeaders.append('Content-Type', 'application/json');
  return fetch(url, {
    method: 'POST',
    body: confirm == true ? formdata : body,
    headers: myHeaders,
    redirect: 'follow',
  })
    .then(res => res.json())
    .then(json => {
      return json;
    })
    .catch(err => {
      return err;
    });
};

export const ApiGet = async url => {
  return fetch(url)
    .then(res => res.json())
    .then(json => {
      return json;
    })
    .catch(err => {
      return err;
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
      return json;
    })
    .catch(err => {
      return err;
    });
};

export const ApiDelete = async url => {
  return fetch(url, {
    method: 'DELETE',
    redirect: 'follow',
  })
    .then(res => res.json())
    .then(json => {
      return json;
    })
    .catch(err => {
      return err;
    });
};
