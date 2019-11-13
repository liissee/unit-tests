const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
    if (monthNumber >= 1 && monthNumber < 13) {
        return months[monthNumber - 1]
    } else {
        return null
    }
}