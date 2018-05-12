# hwWeek6
The data-still data-animate funcionality is not working perfectly. WHenever a new image is created it adds the data-state from the last click so data state loos like:
  first image       data-state = still
  
  second image       data-state = still
                                  animate
                                  
  third image        data-state = still
                                   animate
                                   still
                                   
   forth image       data-state = still
                                  animate
                                  still
                                  animate
                                  
   i tried using the $("<img>).removeAttr("data-state) method before creating new images, however that did not work.
