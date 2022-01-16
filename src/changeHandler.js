const changeHandler = (e, setTandemArr) => {
    let workedTime = 0
    let workedArray = []
    let fileInput = e.target
    if (fileInput.files.length === 0) return
    let reader = new FileReader()
    reader.onload = (e) => {
        let file = e.target.result
        let lines = file.split(/\r\n|\n/)
        let linesArr = lines.map((x) => x.split(',').map(y => y.trim())).filter(x => x.length === 4)
        let timeArr = lines.map((x) => x.split(',').map(y => y.trim())).filter(x => x.length === 4)
        console.log(timeArr)
        linesArr.map((x) => {
            if (x[3] === 'NULL') {
                x[2] = new Date(x[2].split('-').join('/')).getTime()
                x[3] = new Date().getTime()
            } else {
                x[2] = new Date(x[2].split('-').join('/')).getTime()
                x[3] = new Date(x[3].split('-').join('/')).getTime()
            }
        });
        for (let i = 0; i < linesArr.length; i++) {
            for (let j = 0; j < linesArr.length; j++) {
                if (linesArr[i][1] === linesArr[j][1] && linesArr[i][0] !== linesArr[j][0]) {
                    if ((linesArr[i][2] <= linesArr[j][2]) && (linesArr[i][3] >= linesArr[j][2])) {
                        let begginingDay = Math.max(linesArr[i][2], linesArr[j][2])
                        let endingDay = Math.min(linesArr[i][3], linesArr[j][3])
                        let dayCalculation = 1000 * 60 * 60 * 24
                        let diff = Math.abs(begginingDay - endingDay)
                        let days = Math.floor(Number((diff / dayCalculation)))
                        console.log(timeArr[i], timeArr[j], days)
                        if (days > workedTime) {
                            workedTime = days
                            workedArray = [timeArr[i][0], timeArr[j][0], timeArr[i][1], days]
                        }
                    }
                }
            }
        }
        setTandemArr(workedArray)
    }
    reader.readAsText(fileInput.files[0])
}
export default changeHandler