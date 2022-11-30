import data from './data.json' assert {type: 'json'}
import { jobClone } from './clones/job.js';
import { titleTag } from './clones/title-tag.js';
let filterTags = [];
const filterContainer = document.querySelector('.filterContainer');
const subContainer = document.querySelector('.subContainer');
const displayTags = (arr, container) => {
    arr.forEach(el => {
        const tag = document.createElement('button');
        tag.classList = 'tagBtn';
        tag.innerHTML = el;
        tag.addEventListener('click', () => {
            if (!filterTags.includes(el)) {
                filterTags.push(el);
                const filterSub = document.createElement('div');
                filterSub.classList = 'filterSub';
                filterSub.innerHTML = titleTag(el);
                const delBtn = filterSub.querySelector('.subBtn');
                delBtn.addEventListener('click', () => {
                    filterTags = filterTags.filter(tag => tag != el);
                    filterSub.parentNode.removeChild(filterSub);
                    displayJobs();
                });
                subContainer.appendChild(filterSub);
                displayJobs();
            }
        });
        container.appendChild(tag);
    });
}
// Clear function
const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', () => {
    filterTags = [];
    subContainer.innerHTML = '';
    displayJobs();
});
// Display Jobs Automatically using data from data.json
const displayJobs = () => {
    const jobsContainer = document.querySelector('.jobs');
    jobsContainer.innerHTML = '';
    data.forEach(job => {
        // merge all tags in new array
        let mixed = [].concat(job.languages, job.tools, job.role, job.level);
        // Create the job container
        const jobContainer = document.createElement('div');
        jobContainer.classList = 'jobContainer';
        jobContainer.innerHTML = jobClone(job.company, job.logo, job.position, job.postedAt, job.contract, job.location);
        const tagsContainer = jobContainer.querySelector('.tags');
        if (job.new) {
            const newTag = document.createElement('span');
            newTag.classList.add('newTag');
            newTag.innerHTML = 'New!';
            tagsContainer.appendChild(newTag);
        }
        if (job.featured) {
            const featuredTag = document.createElement('span');
            featuredTag.classList.add('featuredTag');
            featuredTag.innerHTML = 'Featured';
            tagsContainer.appendChild(featuredTag);
            jobContainer.classList.add('featured');
        }
        // display tags
        const tagsBtnContainer = jobContainer.querySelector('.tagsContainer');
        displayTags(mixed, tagsBtnContainer);
        // filter tags
        let set = new Set([].concat(mixed, filterTags));
        let results = set.size === new Set(mixed).size;
        if (results) {
            jobsContainer.appendChild(jobContainer);
        }
    });
    if (filterTags.length < 1) {
        filterContainer.classList.add('hide');
    } else {
        filterContainer.classList.remove('hide');
    }
}
displayJobs();