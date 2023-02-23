// This file contains the code for the delete houses
import { useHouseStore } from '@/stores/api.js';
export const showDeletePopup = (id) => {
    const store = useHouseStore();
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.style.position = 'fixed';
    popup.style.zIndex = '9999';
    popup.style.top = '50%';
    popup.style.left = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = '#ffffff';
    popup.style.padding = '20px';
    popup.style.borderRadius = '10px';
    popup.style.width = '500px';
    popup.style.height = '250px';
    popup.innerHTML = `
    <div class="popup" style="margin-left: 90px; display: flex; flex-direction: column; max-width: 332px;" > 
     <h1 style="font-size: 20px; font-family: var(--font-family); color: var(--primary-text); font-weight: 700; display: flex; justify-content: center;" >Delete listing</h1> 
     <p style="font-family: var(--font-family); color: var(--secondary-text); font-weight: 400; font-size: 14px;">Are you sure you want to delete this house?</p>
     <p style="font-family: var(--font-family); color: var(--secondary-text); font-weight: 400; font-size: 14px; margin-top: -14px; margin-left: 30px;">this action cannot be undone.</p>
     <button id="delete-yes" style="margin-top: 20px; height: 35px; border: 1px; border-radius: 4px; font-family: var(--font-family); font-weight: 700; font-size: 14px; color: var(--background2);
     background-color: var(--primary);">YES, DELETE</button>
     <button id="delete-no" style="margin-top: 23px; height: 35px; border: 1px; border-radius: 4px; font-family: var(--font-family); font-weight: 700; font-size: 14px; color: var(--background2);
     background-color: var(--secondary);">GO BACK</button>
     </div>
   `;
  
    const mediaQuery = window.matchMedia('(max-width: 750px)');
    if (mediaQuery.matches) {
      // Change popup style for small screens
      popup.style.maxWidth = '300px';
      popup.style.height = '240px';
      popup.style.padding = '15px';
      popup.innerHTML = `
      <div class="popup" style="margin-left: 10px; display: flex; flex-direction: column; max-width: 332px;" >
       <h1 style="font-size: 20px; font-family: var(--font-family); color: var(--primary-text); font-weight: 700; display: flex; justify-content: center;" >Delete listing</h1> 
       <p style="font-family: var(--font-family); color: var(--secondary-text); font-weight: 400; font-size: 14px;">Are you sure you want to delete this house?</p>
       <p style="font-family: var(--font-family); color: var(--secondary-text); font-weight: 400; font-size: 14px; margin-top: -14px; margin-left: 30px;">this action cannot be undone.</p>
       <button id="delete-yes" style="margin-top: 20px; height: 35px; border: 1px; border-radius: 4px; font-family: var(--font-family); font-weight: 700; font-size: 14px; color: var(--background2);
       background-color: var(--primary);">YES, DELETE</button>
       <button id="delete-no" style="margin-top: 23px; height: 35px; border: 1px; border-radius: 4px; font-family: var(--font-family); font-weight: 700; font-size: 14px; color: var(--background2);
       background-color: var(--secondary);">GO BACK</button>
       </div> `;
         }
  
    document.body.appendChild(popup);
  
    const deleteYesBtn = popup.querySelector('#delete-yes');
    const deleteNoBtn = popup.querySelector('#delete-no');
  
    deleteYesBtn.addEventListener('click', () => {
        store.deleteHouse(id);
        document.body.removeChild(popup);
    });
  
    deleteNoBtn.addEventListener('click', () => {
      document.body.removeChild(popup);
    });
  };