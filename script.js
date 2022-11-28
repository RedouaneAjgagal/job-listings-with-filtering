import data from './data.json' assert {type: 'json'}
import { jobClone } from './clones.js';

const displayTags = (arr, container) => {
    arr.forEach(el => {
        const langaugeTag = document.createElement('button');
        langaugeTag.classList = 'tagBtn';
        langaugeTag.innerHTML = el;
        container.appendChild(langaugeTag);
    });
}

const jobs = document.querySelector('.jobs');
jobs.innerHTML = '';
data.forEach(job => {
    // Create the job element
    const jobContainer = document.createElement('div');
    jobContainer.classList = 'jobContainer';
    jobContainer.innerHTML = jobClone(job.company, job.logo, job.position, job.postedAt, job.contract, job.location);
    const tagsContainer = jobContainer.querySelector('.tags');
    if (job.new) {
        const newTag = document.createElement('span');
        newTag.classList.add('newTag');
        newTag.innerHTML = 'New!'
        tagsContainer.appendChild(newTag);
    }
    if (job.featured) {
        const featuredTag = document.createElement('span');
        featuredTag.classList.add('featuredTag');
        featuredTag.innerHTML = 'Featured';
        tagsContainer.appendChild(featuredTag);
    }
    // Create tags buttons
    const tagsBtnContainer = jobContainer.querySelector('.tagsContainer');
    const role = document.createElement('button');
    role.classList = 'tagBtn';
    role.innerHTML = job.role;
    tagsBtnContainer.appendChild(role);
    const level = document.createElement('button');
    level.classList = 'tagBtn';
    level.innerHTML = job.level;
    tagsBtnContainer.appendChild(level);
    displayTags(job.languages, tagsBtnContainer);
    displayTags(job.tools, tagsBtnContainer);
    jobs.appendChild(jobContainer);
});

