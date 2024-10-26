
// import darkMode from './App'
// //darkmode icon
// const Darkmode = ({ onToggle }) => {
//     return (
//         <div >
//         <div onClick={onToggle} class="absolute w-16 h-11  bg-secondarycolor dark:bg-primarycolor right-16 top-20 rounded-3xl cursor-pointer">
//             <div class="w-11 h-11 bg-secondarycolor dark:bg-primarycolor rounded-3xl">
//             <button  class="bg-white" >
//             <div class="w-7 h-7 bg-primarycolor dark:bg-secondarycolor rounded-3xl absolute right-1 dark:left-1  top-2 flex justify-center items-center">
//             <svg class="fill-secondarycolor dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="m15.844 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.781-1.428zm-5.432.814A8 8 0 1 0 18.93 16A9 9 0 0 1 10 7c0-.98.131-1.937.412-2.842M2 12C2 6.477 6.477 2 12 2h1.734l-.868 1.5C12.287 4.5 12 5.69 12 7a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626C20.162 19.137 16.417 22 12 22C6.477 22 2 17.523 2 12m18.5-5.584l.914 1.67l1.67.914l-1.67.914l-.914 1.67l-.914-1.67L17.916 9l1.67-.914z"/></svg>
       
//         </div>
//         </button>
//         </div>
//         </div>
//         </div>
//       );
// }
 
// export default Darkmode;






import darkMode from './App'
//darkmode icon
const Darkmode = ({ onToggle }) => {
    return (
        <div >
        <div onClick={onToggle} class="absolute w-16 h-11  bg-secondarycolor dark:bg-primarycolor right-9 top-22 rounded-3xl cursor-pointer">
            <div class="w-11 h-11 bg-secondarycolor dark:bg-primarycolor rounded-3xl">
            <button  class="bg-white" >
            <div class="w-7 h-7 bg-primarycolor dark:bg-secondarycolor rounded-3xl absolute right-1 dark:left-1  top-2 flex justify-center items-center">
            <svg class="fill-secondarycolor dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  d="m15.844 3.344l-1.428.781l1.428.781l.781 1.428l.781-1.428l1.428-.781l-1.428-.781l-.781-1.428zm-5.432.814A8 8 0 1 0 18.93 16A9 9 0 0 1 10 7c0-.98.131-1.937.412-2.842M2 12C2 6.477 6.477 2 12 2h1.734l-.868 1.5C12.287 4.5 12 5.69 12 7a7 7 0 0 0 8.348 6.87l1.682-.327l-.543 1.626C20.162 19.137 16.417 22 12 22C6.477 22 2 17.523 2 12m18.5-5.584l.914 1.67l1.67.914l-1.67.914l-.914 1.67l-.914-1.67L17.916 9l1.67-.914z"/></svg>
       
        </div>
        </button>
        </div>
        </div>
        </div>
      );
}
 
export default Darkmode; 