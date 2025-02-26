const parseDate = (unknownDate:Date)=>{
    const date = new Date(unknownDate)
    const day = date.getDate();
    const month = date.toLocaleString('default', {month:'long'});
    const year = date.getFullYear();
    const suffix = getOrdinalSuffix(day)
    const formattedDate = `${day}${suffix} ${month} ${year}`
    
    // console.log(formattedDate)
    return (formattedDate)
}

const getBirthDate = (value:string) =>{
    const newValue = value.split('-').join(',')
    const newDate = new Date(newValue)
    parseDate(newDate)
}

function getOrdinalSuffix(day:number){
    if (day>=11 && day<=13 ){
        return 'th'
    } switch (day % 10) {
        case 1:
            return 'st'
            break;
        case 2:
            return 'nd'
            break;
        case 3:
            return 'rd'
            break;
        default:
            return 'th'
            break;
    }
}

const getAge = (birthDate: Date): number => {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

export {getBirthDate,parseDate,getAge}