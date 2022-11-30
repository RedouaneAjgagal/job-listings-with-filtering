export function jobClone(company, logo, position, postedAt, contract, location) {
    const jobClone = `
                <div class="jobInfo">
                    <div class="imgContainer">
                        <img class="companyLogo" src="${logo}" alt="photosnap-image">
                    </div>
                    <article class="jobContent">
                        <section class="company">
                            <h1 class="companyName">${company}</h1>
                            <div class="tags">
                            </div>
                        </section>
                        <h2 class="position">${position}</h2>
                        <div class="jobReq">
                            <p class="postedAt">${postedAt}</p>
                            <hr>
                            <p class="contract">${contract}</p>
                            <hr>
                            <p class="location">${location}</p>
                        </div>
                    </article>
                </div>
                <hr class="line">
                <div class="tagsContainer">
                    
                </div>
    `
    return jobClone;
}