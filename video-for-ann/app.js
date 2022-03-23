//GEt element
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')


//Build func


function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    
  }
  
  function updateButton(){ 
      const icon = this.paused ? '►' : '❚ ❚';
      toggle.textContent = icon
      console.log('It ran')
  }


  function skip(){ 

      console.log(this.dataset.skip)
      video.ariaCurrentTime += parseFloat=(this.dataset.skip)
  }


  function handleRangUpdate(){
      video[this.name] = this.value
      console.log(this.name)
      console.log(this.value)
  }


  function handleProgress(){ 
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    }


    function scrub(e){ 
        const  scrubTime = (e.offsetX / progress.offsetWidth) * video.duration

        video.currentTime = scrubTime
        console.log(e)
    }

// Event

video.addEventListener('click', togglePlay)
video.addEventListener('pause', updateButton)
video.addEventListener('play', updateButton)
video.addEventListener('timeupdate', handleProgress)

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangUpdate))

let mousedown = false;

progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) =>  mousedown && scrub(e))


progress.addEventListener('mousedown', () => mousedown  = true)
progress.addEventListener('mouseup', () => mousedown  = false)