exports.validateNumber = (value) => {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      return false;
    }
    return true ;
}

exports.percentage = (total,current) => {
    return (Math.floor((current * 100)/total))
}