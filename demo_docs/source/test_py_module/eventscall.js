mp.events.add(
{
    "anyCallbackName" : anything =>
    {
         console.log(anything);
    }
});

mp.events.call("anyCallbackName", "yea");
