import { Box } from '@mui/material';

function Conclusion() {
    return (
        <Box sx={{ padding: '2rem', width: '100%', height: '100vh', overflow: 'auto' }}>
            <h1 className='font-semibold my-8 text-center text-4xl'>Conclusion</h1>
            <Box
                sx={{
                    width: '970px',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                }}
            >
                <p className='text-xl'>Wow, what a whirlwind adventure we had with Digi Yatra! This awesome app taught us all about the magic of AI, from making our boarding passes to recognizing our faces at the airport. Let's relive our journey and see what amazing things we discovered!
                </p>

                <strong className='text-xl'>Our Incredible Journey:</strong>

                <p className='text-xl'>
                    When we used Digi Yatra, we felt like we had a real-life wizard helping us out. First, AI worked its magic to create our boarding passes for the big trip. It was like having a super speedy assistant who knew just what we needed!
                </p>

                <p className='text-xl'>
                    Then, when we arrived at the airport, we stepped up to a mysterious-looking machine with a camera. We were a little nervous at first, but when we stood in front of it, something amazing happened. The machine recognized our faces, just like that! It was like having a friend who could spot us in a crowded room.
                </p>

                <p className='text-xl'>
                    And not only did it recognize us, but it also showed our names on the screen! It felt like we were in a magical storybook, where everything knows who we are.
                </p>

                <strong className='text-xl'>What We Learned:</strong>

                <p className='text-xl'>
                    Through our adventure, we realized that AI isn't just some fancy technology. It's like having a wise friend who can do all sorts of incredible things, like making sure we have our boarding passes ready and helping us breeze through airport security.
                </p>

                <p className='text-xl'>
                    We also learned that AI isn't perfect. Sometimes, it might get a little mixed up or not recognize us right away. But that's okay! We can help teach it and make it even better, just like helping a friend learn something new.
                </p>

                <strong className='text-xl'>Dreaming of More Adventures:</strong>

                <p className='text-xl'>
                    As we head home from our journey, we can't help but dream of more adventures with AI by our side. With its help, we can explore new places, discover new things, and make memories that will last a lifetime. Who knows what magical adventures await us next time!
                </p>
            </Box>

            <div className="flex justify-center mt-32">
                <button
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-24 h-8 rounded-3xl m-auto font-semibold"
                >
                    Previous
                </button>
            </div>
        </Box>
    );
}

export default Conclusion;
