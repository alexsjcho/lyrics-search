import {API} from './api.js';
import * as UI from './ui.js';

UI.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

//Read the form data
const artistName = UI.artistInput.nodeValue,
        songName = UI.songInput.nodeValue;

    //Validate the form
    if(aristName === '' || songName === '') {
        UI.messageDiv.innerHTML = 'Error... All fields are mandatory';
        UI.messageDiv.classList.add('error');
        setTimeout (() => {
            UI.messageDiv.innerHTML - '';
            UI.messageDiv.classList.remove('error');

        }, 3000);
    } else {
        //Query the REST API
        const lyric = new API(artistName, songName);
        lyric.queryAPI()
            .then(data => {
                if(data.lyric.lyrics){
                    //A song was found
                    let result = data.lyric.lyrics;
                    UI.resultDiv.textContent = result;
                } else {
                    //No results found
                    UI.messageDiv.innerHTML = 'No Lyrics Found';
                    UI.messageDiv.classList.add('error');
                    setTimeout (() => {
                        UI.messageDiv.innerHTML - '';
                        UI.messageDiv.classList.remove('error');
                        UI.searchForm.reset();
            
                    }, 3000);
                }
               
            })

    }
})