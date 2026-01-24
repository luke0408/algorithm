function solution(jobs) {
    let sum = 0; let sec = 0;
    const size = jobs.length;
    
    while(jobs.length > 0) {
        if(!jobs.some((j) => j[0] <= sec)) {
            sec++;
            continue;
        }
        
        const target = jobs.filter((j) => j[0] <= sec)
            .sort((a, b) => a[1] - b[1])[0];
        
        sec += target[1];
        sum += (sec - target[0]);
        
        jobs.splice(jobs.indexOf(target), 1);
    }
    
    return parseInt(sum / size);
}