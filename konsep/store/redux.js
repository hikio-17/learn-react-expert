function createStore(reducer) {
   let state = {
    todos: [],
    goals: [],
   };
   let listeners = [];
 
   const getState = () => state;
 
   const subscribe = (listener) => {
     listeners.push(listener);
 
     return () => {
       listeners = listeners.filter((listenerItem) => listenerItem !== listener);
     };
   };
 
   const dispatch = (action) => {
     state = reducer(state, action);
     listeners.forEach((listener) => listener());
   };
 
   return {
     getState,
     subscribe,
     dispatch,
   };
 }

module.exports =  {
   createStore
 }