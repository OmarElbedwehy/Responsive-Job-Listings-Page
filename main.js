fetch("data.json").then((result) => {
    let data = result.json();
    return data;
}).then((jobs) => {
    function createAll(){
        for (let i = 0; i < Object.keys(jobs).length; i++) {
            let job = document.createElement("div");
            job.id = jobs[i].id;
            job.classList.add("job");
            let content = document.createElement("div");
            content.classList.add("content");
            let img_div = document.createElement("div");
            img_div.classList.add("img");
            let img = document.createElement("img");
            img.setAttribute("src", jobs[i].logo);
            img_div.appendChild(img)
            content.appendChild(img_div);
            let text = document.createElement("div");
            text.classList.add("text");
            let top = document.createElement("div");
            top.classList.add("top");
            let text_p = document.createElement("p");
            text_p.textContent = jobs[i].company;
            top.appendChild(text_p);
            if (jobs[i].new == true) {
                let new_ = document.createElement("span");
                new_.classList.add("new");
                new_.textContent = "NEW!";
                top.appendChild(new_)
            }
            if (jobs[i].featured == true) {
                let featured = document.createElement("span");
                featured.classList.add("featured");
                featured.textContent = "Featured";
                top.appendChild(featured)
            }
            text.appendChild(top);
            let position = document.createElement("h2");
            position.textContent = jobs[i].position;
            text.appendChild(position);
            let btm = document.createElement("div");
            btm.classList.add("btm");
            btm.innerHTML = `<p>${jobs[i].postedAt}</p> . <p>${jobs[i].contract}</p> . <p>${jobs[i].location}</p>`
            text.appendChild(btm);
            content.appendChild(text);
            job.appendChild(content);
            let langs = document.createElement("div");
            langs.classList.add("langs");
            for (let j = 0; j < jobs[i].languages.length; j++) {
                let lang = document.createElement("span");
                lang.classList.add("lang")
                lang.textContent = jobs[i].languages[j];
                langs.appendChild(lang)
            }
            job.appendChild(langs)
            document.querySelector(".jobs").appendChild(job);
        }
    }
    createAll()
    let filter_list = [];
    if (filter_list.length == 0) {
        document.querySelector(".filter_list").style.display = "none";
    }
    setInterval(() => {
        document.querySelectorAll(".lang").forEach((ele) => {
            ele.addEventListener("click", (e) => {
                document.querySelector(".filter_list").style.display = "flex";
                document.querySelector(".filter_list .main_content").innerHTML = "";
                document.querySelector(".jobs").innerHTML = "";
                filter_list.push(e.target.textContent)
                filter_list = [...new Set(filter_list)]
                for (let i = 0; i < filter_list.length; i++) {
                    let span = document.createElement("span");
                    span.innerHTML = filter_list[i];
                    span.innerHTML += `<img class="remove" src="./images/icon-remove.svg" alt="">`;
                    document.querySelector(".filter_list .main_content").appendChild(span);
                }

                let filter_jobs = [];
                for (let i = 0; i < Object.keys(jobs).length; i++) {
                    for (let j = 0; j < jobs[i].languages.length; j++) {
                        for (let ii = 0; ii < filter_list.length; ii++) {
                            if (jobs[i].languages[j] == filter_list[ii]) {
                                filter_jobs.push(jobs[i]);
                            }
                        }
                    }
                }
                filter_jobs = [...new Set(filter_jobs)];
                for (let i = 0; i < filter_jobs.length; i++) {
                    let job = document.createElement("div");
                    job.id = filter_jobs[i].id;
                    job.classList.add("job");
                    let content = document.createElement("div");
                    content.classList.add("content");
                    let img_div = document.createElement("div");
                    img_div.classList.add("img");
                    let img = document.createElement("img");
                    img.setAttribute("src", filter_jobs[i].logo);
                    img_div.appendChild(img)
                    content.appendChild(img_div);
                    let text = document.createElement("div");
                    text.classList.add("text");
                    let top = document.createElement("div");
                    top.classList.add("top");
                    let text_p = document.createElement("p");
                    text_p.textContent = filter_jobs[i].company;
                    top.appendChild(text_p);
                    if (filter_jobs[i].new == true) {
                        let new_ = document.createElement("span");
                        new_.classList.add("new");
                        new_.textContent = "NEW!";
                        top.appendChild(new_)
                    }
                    if (filter_jobs[i].featured == true) {
                        let featured = document.createElement("span");
                        featured.classList.add("featured");
                        featured.textContent = "Featured";
                        top.appendChild(featured)
                    }
                    text.appendChild(top);
                    let position = document.createElement("h2");
                    position.textContent = filter_jobs[i].position;
                    text.appendChild(position);
                    let btm = document.createElement("div");
                    btm.classList.add("btm");
                    btm.innerHTML = `<p>${filter_jobs[i].postedAt}</p> . <p>${filter_jobs[i].contract}</p> . <p>${filter_jobs[i].location}</p>`
                    text.appendChild(btm);
                    content.appendChild(text);
                    job.appendChild(content);
                    let langs = document.createElement("div");
                    langs.classList.add("langs");
                    for (let j = 0; j < filter_jobs[i].languages.length; j++) {
                        let lang = document.createElement("span");
                        lang.classList.add("lang")
                        lang.textContent = filter_jobs[i].languages[j];
                        langs.appendChild(lang)
                    }
                    job.appendChild(langs)
                    document.querySelector(".jobs").appendChild(job);
                }
                document.querySelectorAll(".remove").forEach((btn) => {
                    btn.addEventListener("click", (ee) => {
                        document.querySelector(".jobs").innerHTML = "";
                        let span_text = ee.target.parentElement.textContent;
                        filter_list = filter_list.filter(ele => ele != span_text);
                        filter_jobs = [];
                        for (let i = 0; i < Object.keys(jobs).length; i++) {
                            for (let j = 0; j < jobs[i].languages.length; j++) {
                                for (let ii = 0; ii < filter_list.length; ii++) {
                                    if (jobs[i].languages[j] == filter_list[ii]) {
                                        filter_jobs.push(jobs[i]);
                                    }
                                }
                            }
                        }
                        filter_jobs = [...new Set(filter_jobs)];
                        for (let i = 0; i < filter_jobs.length; i++) {
                            let job = document.createElement("div");
                            job.id = filter_jobs[i].id;
                            job.classList.add("job");
                            let content = document.createElement("div");
                            content.classList.add("content");
                            let img_div = document.createElement("div");
                            img_div.classList.add("img");
                            let img = document.createElement("img");
                            img.setAttribute("src", filter_jobs[i].logo);
                            img_div.appendChild(img)
                            content.appendChild(img_div);
                            let text = document.createElement("div");
                            text.classList.add("text");
                            let top = document.createElement("div");
                            top.classList.add("top");
                            let text_p = document.createElement("p");
                            text_p.textContent = filter_jobs[i].company;
                            top.appendChild(text_p);
                            if (filter_jobs[i].new == true) {
                                let new_ = document.createElement("span");
                                new_.classList.add("new");
                                new_.textContent = "NEW!";
                                top.appendChild(new_)
                            }
                            if (filter_jobs[i].featured == true) {
                                let featured = document.createElement("span");
                                featured.classList.add("featured");
                                featured.textContent = "Featured";
                                top.appendChild(featured)
                            }
                            text.appendChild(top);
                            let position = document.createElement("h2");
                            position.textContent = filter_jobs[i].position;
                            text.appendChild(position);
                            let btm = document.createElement("div");
                            btm.classList.add("btm");
                            btm.innerHTML = `<p>${filter_jobs[i].postedAt}</p> . <p>${filter_jobs[i].contract}</p> . <p>${filter_jobs[i].location}</p>`
                            text.appendChild(btm);
                            content.appendChild(text);
                            job.appendChild(content);
                            let langs = document.createElement("div");
                            langs.classList.add("langs");
                            for (let j = 0; j < filter_jobs[i].languages.length; j++) {
                                let lang = document.createElement("span");
                                lang.classList.add("lang")
                                lang.textContent = filter_jobs[i].languages[j];
                                langs.appendChild(lang)
                            }
                            job.appendChild(langs)
                            document.querySelector(".jobs").appendChild(job);
                        }
                        ee.target.parentElement.remove();
                        if (filter_jobs.length == 0){
                            document.querySelector(".filter_list").style.display = "none";
                            createAll()
                        }
                    })
                })
            })
        })
    }, 500)
    document.querySelector(".clear").addEventListener("click", () => {
        document.querySelector(".filter_list .main_content").innerHTML = "";
        document.querySelector(".jobs").innerHTML = "";
        filter_list = [];
        document.querySelector(".filter_list").style.display = "none";
        createAll()
    })
})


// SCROLLER

window.onscroll = ()=>{
    if (window.scrollY >= 160){
        document.querySelector(".scroller").style.opacity = "1";
    }else{
        document.querySelector(".scroller").style.opacity = "0";
    }

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    document.querySelector(".scroller").style.width = `${(scrollTop / height) * 100}%`;

    // SCROLL TO TOP
    if (window.scrollY >= 300){
        document.querySelector(".scroll_to_top").style.transform = "translateX(0px)";
    }else{
        document.querySelector(".scroll_to_top").style.transform = "translateX(80px)";
    }

    document.querySelector(".scroll_to_top").addEventListener("click", ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        })
    })
}