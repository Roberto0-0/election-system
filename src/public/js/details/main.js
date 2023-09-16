const section_parcent = document.querySelector(".section-parcent").textContent
const progress = document.querySelector(".progress")
const date = document.querySelector(".date")
const time = document.querySelector(".time")
const circle_progress = document.getElementsByClassName("circle-progress")
const percent = document.getElementsByClassName("percent")
const li = document.getElementsByClassName("li")
const elected = document.getElementsByClassName("result")

const local_time = new Date()

const main = () => {
  li[li.length - 1].classList.toggle("end")
  
  progress.setAttribute("style", "width:" + section_parcent + "%")
  
  for(var i=0;i < percent.length;i++) {
    if(percent[i].textContent.replace("%", "") == "NaN") {
      percent[i].innerHTML = "0.00%"
    }
  }
  
  for(var i=0;i < circle_progress.length;i++) {
    circle_progress[i].style.background = `conic-gradient(#8b70ad ${percent[i].textContent.replace("%", "") * 3.6}deg, #f4f4f4 0deg)`
  }
  
  date.innerHTML =`${dayjs(local_time).format("DD/MM/YY")}`
  time.innerHTML =`${dayjs(local_time).format("HH:mm:ss")}`
  
  if(li.length <= 2) {
    for(var i=0;i < li.length;i++) {
      if(section_parcent >= 90.00) {
        if(Number(percent[i].textContent.replace("%", "")).toFixed(2) >= 50.00) {
          elected[i].innerHTML = `<span class="elected true">Eleito<span>`
        } if(Number(percent[i].textContent.replace("%", "")).toFixed(2) < 50.00) {
          elected[i].innerHTML = `<span class="elected false">Não Eleito<span>`
        }
      }
    }
  } if(li.length > 2) {
    for(var i=0;i < li.length;i++) {
      if(section_parcent == 100.00) {
        if(Number(percent[i].textContent.replace("%", "")).toFixed(2) < 50.00) {
          if(li[i] == li[1]) {
            elected[0].innerHTML = `<span class="elected">Eleito<span>`
            elected[1].innerHTML = `<span class="elected">Eleito<span>`
            elected[0].innerHTML = `<span class="turno true">2° Turno<span>`
            elected[1].innerHTML = `<span class="turno true">2° Turno<span>`
          } else {
            elected[i].innerHTML = `<span class="elected false">Não Eleito<span>`
          }
        }
      }
    }
  } if(li.length > 2) {
      if(sections == 100.00) {
        for(var i=0;i < li.length;i++) {
          if(Number(percent[i].textContent.replace("%", "")).toFixed(2) >= 50.00) {
            for(var j=0;j < li.length;j++) {
              if(Number(percent[j].textContent.replace("%", "")).toFixed(2) >= 50.00) {
                elected[j].innerHTML = `<span class="elected true">Eleito<span>`
              } if(Number(percent[j].textContent.replace("%", "")).toFixed(2) < 50.00) {
                elected[j].innerHTML = `<span class="elected false">Não Eleito<span>`
              }
            } 
          }
        }
      }
  }
}

main()
