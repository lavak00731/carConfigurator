export const dataService = async () => {
    const resp = await fetch('https://carconfigurator.free.beeceptor.com/carconfig');
    const  data  = await resp.json();
    console.log(data)
    return data;
}