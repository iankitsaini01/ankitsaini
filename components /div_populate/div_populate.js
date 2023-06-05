window.addEventListener("load", populate(names, icons))
const names = {
    facebook: "facebook",
    snapchat: "snapchat",
    whatsapp: "whatapp",
    instagram: "instagram"
};

function populate(names, icons){
return `<a class="card-search" href="https://app.easyinsights.ai" target="_blank">
            <img src="/assets/images/desktop_common/Destination-page/${dummy}.svg"
                alt="${dummy}" />
            <span class="card-search-title">${dummy}</span>
        </a>`

}