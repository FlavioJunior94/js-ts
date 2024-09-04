function recursiva(max) {
    console.log(max);
    if(max >= 11282) return;
    max++;
    recursiva(max);    
}

recursiva(0);