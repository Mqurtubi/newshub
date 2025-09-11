const timeAgo=(time)=>{
    const now = new Date()
    const past = new Date(time)
    const diff = Math.floor((now-past)/1000)

    if (diff < 60 ) return `${diff} second ago`
    if(diff < 3600 ) return `${Math.floor(diff/60)} minutes ago`
    if(diff < 86400) return `${Math.floor(diff/3600)} hours ago`
    if(diff < 604800) {
         const days = Math.max(1, Math.floor(diff / 86400));
         return `${days} day${days > 1 ? "s" : ""} ago`;
    }

    return past.toLocaleString  ("en-US",{
        weekday:"short",
        year:"numeric",
        month:"short",
        day:"numeric"
    })
}

export {timeAgo}