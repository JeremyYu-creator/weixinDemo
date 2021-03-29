export const toDate = (number) => {
    const date = new Date(number)
    const year = date.getFullYear()
    const mounth = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() 
    return year + '年' + mounth + '月' + day + '日' +'  '+ hour + ':' + minute + ':' + second 
}