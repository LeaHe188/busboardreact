import React, {useState} from 'react';
import '../dataStyle.css';

function App(): React.ReactElement {
    return <>
        <div>
            <h2>History of the London Buses</h2>
            <p>The early 19th century saw the arrival of the omnibus in London, introduced by English coachbuilder George Shillibeer. Before that the only road vehicles for public hire were four wheeled coaches called hackneys.
                Strict licensing regulations allowed for monopoly of public transport and as a result Shillibeer was refused permission to run the omnibus in the Central London area. Instead he chose to run the service along busy routes around the edge of London, from Paddington to the city via Islington.
                In 1832 a government enquiry resulted in the end of the hackney coach monopoly, this allowed other operators to introduce omnibus services resulting in fierce competition. A majority of omnibuses were taken over by the newly formed London General Omnibus Company (LGOC) by the end of 1856.</p>

            <h3>Competition for passengers</h3>
            <p>Much of the central London network wa s completed in the first 50 years, all through private development. In this period the first group of routes were built in shallow cut-and-cover tunnels along existing thoroughfares and needed plenty of vents to allow smoke and steam from the engines to escape. Around the turn of the twentieth century the development of electric traction allowed much deeper tunnels to penetrate the heart of the city, leading to a second wave of construction.

                In the next 50 years the focus turned to extending lines ever further into London's suburbs. Indeed, many suburbs were created by the coming of the Underground, and were even developed by the railway companies themselves, becoming known famously as Metroland. In 1933, the various private companies running different lines were nationalised and integrated into a single body, the London Passenger Transport Board.</p>

            <h3>Nationalisation</h3>
            <p>It wasn't until 1968 that the first new line across central London for more than 60 years - the Victoria line - opened, followed in 1979 by the Jubilee line. In 1999 the Jubilee line was extended to London's Docklands, facilitating regeneration and the growth of the Canary Wharf business district.

            In 2003, London Underground became a wholly owned subsidiary of TfL. Our comprehensive plan to improve the Tube has involved refurbishing hundreds of stations, upgrading lines to provide faster, more frequent and more reliable services, installing step free access at many locations, and entirely rebuilding some central London stations that have become too small to deal with the number of people passing through every day.

                The extra capacity these improvements are providing is badly needed. In 2016/17 1.37 billion journeys were made, over two and a half times the post-war low of 498 million journeys made in 1982.</p>
        </div>

    </>;
}

export default App;