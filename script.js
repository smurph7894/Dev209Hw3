const MovieArray = [];

const Movie = function(pTitle, pRating, pYear){
    this.title = pTitle;
    this.rating = pRating;
    this.year = pYear;
};

document.addEventListener("DOMContentLoaded", function(e){



    document.getElementById("movieSubmitButton").addEventListener("click", function () {
        let fTitle = document.getElementById("iTitle").value;
        let fRating = document.getElementById("iRating").value;
        let fYear = document.getElementById("iYear").value;

        if(fTitle == "" || fRating == "" || fYear == ""){
            const popUp = document.getElementById("popUp");
            popUp.innerHTML = `
                <div class="alert">
                    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
                    Entry Error, your last movie was not saved. Please try again.
                </div>
            `
            document.getElementById("iTitle").value = "";
            document.getElementById("iRating").value = '';
            document.getElementById("iYear").value = '';
        }
        else {
            MovieArray.push( new Movie(fTitle, fRating, fYear));
            document.getElementById("iTitle").value = "";
            document.getElementById("iRating").value = '';
            document.getElementById("iYear").value = '';
        }
    });
});

const displayMovies = () => {
    if(MovieArray.length === 0){
        return;
    }
    const list = document.getElementById("list");
    let htmlLiTags="";
    for(let i=0; i<MovieArray.length; i++){
        htmlLiTags += `
            <li>Movie: ${MovieArray[i].title}, Rating: ${MovieArray[i].rating}, Year: ${MovieArray[i].year} </li>
        `
    }
    list.innerHTML = htmlLiTags;
    document.getElementById('movieList').style.display = 'flex'
}
