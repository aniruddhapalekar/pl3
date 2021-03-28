module.exports.add=function add(a,b)
{
    return a+b
}

module.exports.sub=function sub(a,b)
{
    return a-b
}

module.exports.pow=function pow(a,b)
{
    ans=1
    for(i=1;i<=b;i++)
    {
        ans=ans*a
    }
    return ans
}