<script lang="ts">
    import { onMount } from "svelte";

    let msgText: string;
    let option: string;

    let options: any;
    
    onMount(() => {
        options = fetch('http://127.0.0.1:3001/api/channels?key=JjKZFxKWn8UWr3Pd7VLWGvhfmi4Q6li89qP0G6d&sid=775761665786511370')
            .then(e => { return e.json() }).then(fall => {console.log(fall)});
    });

    function sendMsg() {
        console.log(options);
        console.log(`${msgText}`)
        const fetchedData = new Request(`/api/sendMsg?msg=${msgText}`, {
            method: 'POST',
            body: `${msgText}`
        })
        const fetchedDataReq = fetch(fetchedData);
    };

    function onChannelChange(event: Event) {
        option = event.target.value;
    }
</script>

<form id="sendmsg" on:submit|preventDefault={sendMsg}>
    <input type="text" bind:value={msgText}>
    <input type="submit" value="Submit">
</form>