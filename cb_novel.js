let deathCount = 0;
try {
  let saved = localStorage.getItem("deathCount");
  deathCount = saved ? parseInt(saved, 10) : 0;
} catch (e) {
  deathCount = 0;
}

function getCharacterName() {
  return `E-${deathCount}`;
}

const story = {
    start: {
        text: () => `${getCharacterName()} wakes in a dimly lit corridor of rough stone.<br><br>
        The air is heavy with mildew, the silence broken only by the faint dripping of water. Their head aches, but an instinct presses one thought into their mind:<br><br>
        *Move forward, or die here.*<br><br>
        Ahead, two paths stretch into darkness.`,
        choices: [
            { text: "Take the left hallway", next: "p1" },
            { text: "Take the right hallway", next: "p2" }
        ]
    },

    p1: {
        text: () => `${getCharacterName()} steps into a hallway lined with rusted iron spikes.<br><br>
        The smell of dried blood lingers. With each step, the floor groans.<br><br>
        *Click.*<br><br>
        The ceiling slams downward like a crushing jaw. The last sound is the wet crunch of bone.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },

    p2: {
        text: () => `The right hallway stretches on, seemingly endless.<br><br>
        Shadows ripple along the walls though there is no torchlight.<br><br>
        Suddenly, a ragged whisper drifts through the darkness:<br><br>
        *"Turn back… or join us."*<br><br>
        Two doors appear where there were none—one etched with symbols, the other plain and wooden.`,
        choices: [
            { text: "Open the symbol-etched door", next: "p3" },
            { text: "Open the plain wooden door", next: "p4" }
        ]
    },

    p3: {
        text: () => `The etched door swings open to reveal a staircase spiraling upward.<br><br>
        At the top glows faint daylight—salvation? ${getCharacterName()} sprints, lungs burning.<br><br>
        But the "light" is nothing but a painted ceiling. The steps dissolve into ash beneath their feet.<br><br>
        They plummet into blackness, the fall never ending.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },

    p4: {
        text: () => `The wooden door creaks open into a chamber filled with mirrors.<br><br>
        Each reflection of ${getCharacterName()} moves a heartbeat slower than they do. Then the reflections begin smiling—though they are not.<br><br>
        One reflection steps out of the mirror and whispers:<br><br>
        *"There is no escape… but follow me if you dare."*`,
        choices: [
            { text: "Follow the reflection", next: "p5" },
            { text: "Shatter the mirrors", next: "gameover" }
        ]
    },

    p5: {
        text: () => `${getCharacterName()} follows the reflection deeper, their own footsteps echoing alongside its mockery.<br><br>
    The path winds and twists until—impossibly—they emerge into a vast chamber tiled like a checkerboard.<br><br>
    The reflection bows, vanishing with a hiss.<br><br>
    The maze mocks them. They are trapped in the cycle… or perhaps not.`,
    choices: [
        { text: "Step onto the tiles", next: "p6" }, 
        { text: "Retreat in fear", next: "p7" } 
    ]
    },

    p6: {
        text: () => `${getCharacterName()} steps into a chamber where the floor is a checkerboard of black and white tiles.<br><br>
        The tiles hum faintly. Every step they take, the hum grows louder.<br><br>
        Suddenly, the black tiles collapse into bottomless voids.<br><br>
        ${getCharacterName()} scrambles, but the white tiles begin to tilt… and they tumble screaming into the abyss.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },

    p7: {
        text: () => `${getCharacterName()} finds a hallway carpeted in crimson. The air smells faintly of iron.<br><br>
        Whispers drift from the walls, urging them onward:<br><br>
        *"Just a little further… you’re close…"*<br><br>
        At the end lies a door cracked open, spilling warm golden light.`,
        choices: [
            { text: "Enter the golden light", next: "p8" },
            { text: "Ignore it and turn back", next: "p9" }
        ]
    },

    p8: {
        text: () => `The golden light is blinding. ${getCharacterName()} pushes through the door and emerges into a vast meadow, sunlight warming their face.<br><br>
        Birds sing. The scent of flowers fills the air.<br><br>
        Tears of relief well up—until the meadow peels away like old wallpaper, revealing endless stone walls again.<br><br>
        It was all a cruel illusion. They are back where they began.`,
        choices: [
            { text: "Choose again", next: "p10" }
        ]
    },

    p9: {
        text: () => `${getCharacterName()} turns away from the golden glow. The whispers grow into shrieks:<br><br>
        *"COWARD. YOU BELONG TO US."*<br><br>
        Hands of shadow burst from the carpet and drag them screaming into the floor, leaving no trace.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },

    p10: {
        text: () => `The corridor ahead is lined with statues. Each depicts a hooded figure clutching a blade.<br><br>
        As ${getCharacterName()} walks past, one statue shifts. Then another.<br><br>
        Soon every statue turns its head toward them, eyes gleaming red in the dark.<br><br>
        A voice rasps:<br><br>
        *"Only one path leads forward. Choose carefully."*<br><br>
        Two archways open ahead.`,
        choices: [
            { text: "Take the left archway", next: "p12" },
            { text: "Take the right archway", next: "p11" }
        ]
    },

    p11: {
        text: () => `${getCharacterName()} steps into a narrow hallway where the ceiling hangs oppressively low.<br><br>
        The air is thick, damp, and foul. Scratching sounds echo above the stones.<br><br>
        Suddenly, a swarm of pale rats bursts through cracks in the ceiling, dropping in writhing heaps.<br><br>
        Their tiny teeth sink into flesh before ${getCharacterName()} can even scream.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p12: {
        text: () => `${getCharacterName()} enters a chamber where a massive mirror dominates the far wall.<br><br>
        Their reflection smiles back—but ${getCharacterName()} does not.<br><br>
        The reflection beckons them closer. A voice whispers:<br><br>
        *"Step through. Freedom awaits."*`,
        choices: [
            { text: "Step through the mirror", next: "p13" },
            { text: "Smash the mirror", next: "p14" }
        ]
    },
    
    p13: {
        text: () => `The glass ripples as ${getCharacterName()} steps forward. On the other side lies a sunlit city, full of laughter and life.<br><br>
        But the air smells wrong. Too sweet. Too heavy.<br><br>
        The sky tears apart like paper, the city collapses into ash, and the reflection’s hands clamp around ${getCharacterName()}'s throat, dragging them into the glass forever.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p14: {
        text: () => `The mirror shatters into a thousand shards. Blood-red mist gushes from the cracks, filling the room.<br><br>
        ${getCharacterName()} chokes, clawing at their throat, but the mist consumes them entirely.<br><br>
        When it clears, they are standing once again at the maze’s starting point.`,
        choices: [
            { text: "Choose again", next: "p19" }
        ]
    },
    
    p15: {
        text: () => `A spiral staircase stretches downward into blackness. Each step groans beneath ${getCharacterName()}'s weight.<br><br>
        Down, down, endlessly downward. The air grows colder. The walls slick with condensation.<br><br>
        At the bottom is a single iron door with carvings of chained skeletons writhing in silence.`,
        choices: [
            { text: "Open the iron door", next: "p16" },
            { text: "Climb back up", next: "p10" }
        ]
    },
    
    p16: {
        text: () => `The iron door creaks open to reveal a vast hall lit by flickering braziers.<br><br>
        The flames burn green, casting sickly light over piles of discarded bones.<br><br>
        A throne of skulls sits at the center, empty—yet ${getCharacterName()} feels *watched*.`,
        choices: [
            { text: "Approach the throne", next: "p17" },
            { text: "Retreat quietly", next: "p18" }
        ]
    },
    
    p17: {
        text: () => `As ${getCharacterName()} nears the throne, the braziers flare violently.<br><br>
        A figure made of shadows uncoils itself from the bones, hollow eyes gleaming.<br><br>
        Before ${getCharacterName()} can run, skeletal arms rise from the floor and drag them screaming beneath the throne.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p18: {
        text: () => `${getCharacterName()} retreats, but the door they came from has vanished.<br><br>
        The hall stretches endlessly now, the throne shrinking further into the distance no matter how far they walk.<br><br>
        Exhaustion overtakes them as the green flames dim…<br><br>
        When they awaken, they are once again in the maze’s starting chamber.`,
        choices: [
            { text: "Try again", next: "p12" }
        ]
    },
    
    p19: {
        text: () => `The air grows damp. ${getCharacterName()} enters a flooded corridor where water rises to the knees.<br><br>
        Shapes dart beneath the surface, brushing against their legs.<br><br>
        A jagged fin breaks the water behind them.`,
        choices: [
            { text: "Run forward", next: "p20" },
            { text: "Stand still", next: "gameover" }
        ]
    },
    
    p20: {
        text: () => `${getCharacterName()} slogs forward through the water, heart racing.<br><br>
        The corridor splits into two passages ahead—one glowing faintly, the other sinking deeper into darkness.`,
        choices: [
            { text: "Take the glowing passage", next: "p21" },
            { text: "Take the dark passage", next: "p22" }
        ]
    },
    
    p21: {
        text: () => `The glowing passage leads ${getCharacterName()} into a chamber lined with crystal walls.<br><br>
        Each step echoes a hundredfold, reflections multiplying until the maze is filled with a thousand ${getCharacterName()}s staring back.<br><br>
        One reflection moves independently, smiling.`,
        choices: [
            { text: "Approach the smiling reflection", next: "gameover" },
            { text: "Turn away quickly", next: "p23" }
        ]
    },
    
    p22: {
        text: () => `The dark passage narrows until ${getCharacterName()} must crawl on hands and knees.<br><br>
        The walls are slick with some foul residue, the stench suffocating.<br><br>
        Crawling further, they glimpse faint light ahead—or is it eyes?`,
        choices: [
            { text: "Crawl toward the light", next: "p24" },
            { text: "Retreat backwards", next: "p19" }
        ]
    },
    
    p23: {
        text: () => `${getCharacterName()} averts their gaze and rushes out of the crystal chamber.<br><br>
        The reflections snarl in unison, fists slamming against the glass walls, but they shatter into dust before pursuit.<br><br>
        The path ahead is narrow and steep, leading down into another chamber.`,
        choices: [
            { text: "Descend carefully", next: "p25" }
        ]
    },
    
    p24: {
        text: () => `The faint light flickers closer as ${getCharacterName()} crawls. Then the tunnel opens suddenly.<br><br>
        A massive serpent coils around the chamber, its body crushing the stone as it awakens.<br><br>
        Eyes gleam like lanterns. The last thing ${getCharacterName()} hears is the sound of scales tightening around their bones.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p25: {
        text: () => `The passage leads to a circular chamber where water drips rhythmically from the ceiling.<br><br>
        In the center lies a pedestal holding a tarnished bronze key.<br><br>
        An inscription above reads:<br><br>
        *'Not all doors are meant to open.'*`,
        choices: [
            { text: "Take the key", next: "p26" },
            { text: "Leave it and move on", next: "p27" }
        ]
    },

    p26: {
        text: () => `${getCharacterName()} snatches the bronze key. The pedestal sinks into the ground, and the dripping water stops.<br><br>
        The silence that follows feels heavy, oppressive.<br><br>
        A new archway opens in the wall, carved with symbols resembling locks and chains.`,
        choices: [
            { text: "Enter the archway", next: "p28" },
            { text: "Go back the way you came", next: "p27" }
        ]
    },
    
    p27: {
        text: () => `Leaving the key untouched, ${getCharacterName()} continues down a side passage.<br><br>
        The air here tastes metallic, like rusted iron.<br><br>
        Chains hang from the ceiling, swaying though no wind stirs.`,
        choices: [
            { text: "Push past the chains", next: "p29" },
            { text: "Turn back toward the pedestal chamber", next: "p25" }
        ]
    },
    
    p28: {
        text: () => `The key fits neatly into a lock carved into the archway. With a grating sound, the door swings open.<br><br>
        Beyond lies a stairwell spiraling upward into darkness. The walls are carved with marks—tallies, scratches, names—all ending abruptly.`,
        choices: [
            { text: "Climb the stairwell", next: "p30" },
            { text: "Retreat to the key chamber", next: "p25" }
        ]
    },
    
    p29: {
        text: () => `As ${getCharacterName()} pushes through the hanging chains, they jingle faintly.<br><br>
        The sound grows louder, louder, until the chains rattle violently on their own.<br><br>
        Hooks pierce through ${getCharacterName()}'s flesh, yanking them upward into the shadows above.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p30: {
        text: () => `The stairwell rises endlessly. Each step echoes like thunder, as if the stone itself resents the intrusion.<br><br>
        Halfway up, ${getCharacterName()} finds a broken lantern on the steps, still faintly warm to the touch.<br><br>
        Someone was here… recently.`,
        choices: [
            { text: "Keep climbing", next: "p31" },
            { text: "Go back down", next: "p28" }
        ]
    },

    p31: {
        text: () => `The stairwell finally ends in a heavy wooden door, its surface splintered with claw marks.<br><br>
        A faint draft seeps through the cracks, carrying with it the smell of pine and fresh air.<br><br>
        Salvation? Or a trick?`,
        choices: [
            { text: "Open the wooden door", next: "p32" },
            { text: "Ignore it and keep searching", next: "p33" }
        ]
    },
    
    p32: {
        text: () => `${getCharacterName()} shoves the door open. Beyond lies a sprawling meadow under a bright sun.<br><br>
        Birds sing. Flowers bloom.<br><br>
        But the air does not move, the colors too vivid, the sky too perfect.<br><br>
        The meadow folds in on itself, crushing ${getCharacterName()} in a kaleidoscope of false beauty.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p33: {
        text: () => `${getCharacterName()} bypasses the wooden door. Further along the stone wall is another door—this one iron, rusted, and chained shut.<br><br>
        The bronze key hums faintly in their pocket.`,
        choices: [
            { text: "Use the bronze key", next: "p34" },
            { text: "Leave it alone", next: "p35" }
        ]
    },
    
    p34: {
        text: () => `The bronze key slides perfectly into the lock. The chains fall away.<br><br>
        Inside is a chamber of mirrors, floor to ceiling, reflecting ${getCharacterName()} endlessly.<br><br>
        One reflection holds the key up—and then stabs it into its own throat. Blood splashes across *all* the mirrors at once.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p35: {
        text: () => `Leaving the chained door behind, ${getCharacterName()} presses deeper into the stairwell’s shadows.<br><br>
        The stairs crumble, leading to a jagged drop into darkness.<br><br>
        A faint rope bridge dangles across the chasm, swaying ominously.`,
        choices: [
            { text: "Cross the rope bridge", next: "p36" },
            { text: "Turn back", next: "p30" }
        ]
    },

    p36: {
        text: () => `The rope bridge creaks under ${getCharacterName()}'s weight. The chasm yawns endlessly below, whispers rising from its depths.<br><br>
        Halfway across, the ropes groan, fibers snapping one by one.`,
        choices: [
            { text: "Run across quickly", next: "p37" },
            { text: "Move slowly and carefully", next: "p38" }
        ]
    },
    
    p37: {
        text: () => `${getCharacterName()} bolts forward. The bridge cannot take the sudden weight shift.<br><br>
        The ropes snap all at once, sending ${getCharacterName()} plummeting.<br><br>
        They fall and fall, the whispering voices below rising into cheers.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p38: {
        text: () => `Step by careful step, ${getCharacterName()} inches across.<br><br>
        The bridge sways violently, but it holds—long enough for them to reach the other side.<br><br>
        There, a carved stone archway stands, inscribed with words too faded to read.`,
        choices: [
            { text: "Pass through the archway", next: "p39" },
            { text: "Rest before continuing", next: "p40" }
        ]
    },
    
    p39: {
        text: () => `The archway glows faintly as ${getCharacterName()} passes through.<br><br>
        A forest appears—tall black trees, their leaves whispering names not their own.<br><br>
        A path winds deeper inside, lined with skeletal remains clutching broken lanterns.`,
        choices: [
            { text: "Follow the forest path", next: "p41" },
            { text: "Pick up a lantern", next: "p42" }
        ]
    },
    
    p40: {
        text: () => `Exhaustion grips ${getCharacterName()}. They sit against the stone wall, breathing deeply.<br><br>
        But the stones are warm. Too warm. Something inside the wall *breathes back.*<br><br>
        Suddenly, hands burst through the cracks, dragging them inside screaming.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },

    p41: {
        text: () => `${getCharacterName()} walks deeper into the forest. Each step crunches over bones hidden beneath leaves.<br><br>
        The trees lean closer, their branches clawing like skeletal hands.<br><br>
        A faint light glimmers in the distance.`,
        choices: [
            { text: "Head toward the light", next: "p43" },
            { text: "Ignore it and wander deeper", next: "p44" }
        ]
    },
    
    p42: {
        text: () => `${getCharacterName()} picks up the lantern. It flickers to life with a sickly green glow.<br><br>
        The light drives back the shadows, but whispers grow louder. The lantern *hungers*.<br><br>
        It feels heavier with every step.`,
        choices: [
            { text: "Keep carrying it", next: "p45" },
            { text: "Throw it away", next: "p41" }
        ]
    },
    
    p43: {
        text: () => `The glimmer resolves into a clearing where a broken mirror stands on a pedestal.<br><br>
        The mirror shows not ${getCharacterName()}, but a stranger smiling hungrily.<br><br>
        The reflection beckons.`,
        choices: [
            { text: "Touch the mirror", next: "gameover" },
            { text: "Turn back quickly", next: "p44" }
        ]
    },
    
    p44: {
        text: () => `Ignoring the light, ${getCharacterName()} presses on.<br><br>
        The forest thickens until the trees knot together, leaving only a narrow tunnel ahead.<br><br>
        At the end of it, a stone stairway descends underground.`,
        choices: [
            { text: "Descend the stairs", next: "p46" },
            { text: "Return to the archway", next: "p36" }
        ]
    },
    
    p45: {
        text: () => `The lantern grows unbearably heavy in ${getCharacterName()}'s hands.<br><br>
        Its light suddenly flares, burning their skin, fusing to their palms.<br><br>
        The screams echo as the lantern devours them whole.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },

    p46: {
        text: () => `${getCharacterName()} descends the crumbling stone steps.<br><br>
        The air grows damp, thick with the smell of rot and moss.<br><br>
        Faint carvings line the walls, depicting endless mazes filled with corpses.`,
        choices: [
            { text: "Study the carvings", next: "p47" },
            { text: "Ignore them and go deeper", next: "p48" }
        ]
    },
    
    p47: {
        text: () => `The carvings shift as ${getCharacterName()} stares too long.<br><br>
        The etched corpses begin moving, their faces screaming silently from the stone.<br><br>
        A hand reaches out from the wall to drag them in.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p48: {
        text: () => `The stairway ends in a massive underground hall.<br><br>
        Pillars rise like tree trunks, and between them are statues of faceless guardians.<br><br>
        One statue’s head slowly turns to follow ${getCharacterName()}.`,
        choices: [
            { text: "Approach the statue", next: "p49" },
            { text: "Hurry across the hall", next: "p50" }
        ]
    },
    
    p49: {
        text: () => `As ${getCharacterName()} approaches, the statue cracks open.<br><br>
        From within, a skeletal warrior erupts, blade dripping with shadows.<br><br>
        It swings with impossible speed.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p50: {
        text: () => `${getCharacterName()} sprints across the hall.<br><br>
        The statues creak, their arms twitching, but none follow.<br><br>
        At the far end, two doors await: one of iron, one of bone.`,
        choices: [
            { text: "Open the iron door", next: "p51" },
            { text: "Open the bone door", next: "p52" }
        ]
    },

    p51: {
        text: () => `${getCharacterName()} pushes the iron door open.<br><br>
        It groans like a beast in pain, revealing a corridor lined with chains hanging from the ceiling.<br><br>
        Each chain drips with fresh blood, though no bodies are attached.`,
        choices: [
            { text: "Walk through carefully", next: "p53" },
            { text: "Pull one of the chains", next: "p54" }
        ]
    },
    
    p52: {
        text: () => `The bone door creaks open, brittle fragments falling away.<br><br>
        A wave of stench rolls out — decay, thick enough to choke.<br><br>
        Inside, piles of bones stir, rattling as if alive.`,
        choices: [
            { text: "Step inside", next: "p55" },
            { text: "Retreat to the hall", next: "p50" }
        ]
    },
    
    p53: {
        text: () => `${getCharacterName()} edges through the chains, careful not to disturb them.<br><br>
        Still, one sways, and the ceiling above trembles.<br><br>
        A rain of rusted blades drops, slicing them to pieces.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p54: {
        text: () => `The chain jerks violently as ${getCharacterName()} pulls.<br><br>
        The walls snap shut like jaws, crushing everything inside.<br><br>
        A final scream echoes, muffled by stone.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p55: {
        text: () => `The bone chamber groans as ${getCharacterName()} steps inside.<br><br>
        The skeletal piles rise, forming a giant amalgamation with countless skulls for a head.<br><br>
        Its hollow sockets burn with hunger.`,
        choices: [
            { text: "Fight the abomination", next: "p56" },
            { text: "Flee back to the hall", next: "p50" }
        ]
    },

    p56: {
        text: () => `${getCharacterName()} charges at the abomination.<br><br>
        Their fists and kicks shatter fragments of bone, but each broken piece simply reforms into its hulking mass.<br><br>
        The creature swings a colossal arm of femurs downward, shaking the chamber.`,
        choices: [
            { text: "Dodge and keep fighting", next: "p57" },
            { text: "Retreat to the doorway", next: "p58" }
        ]
    },
    
    p57: {
        text: () => `${getCharacterName()} ducks beneath the bone fist, rushing forward.<br><br>
        They slam into the abomination’s ribcage, cracking it apart — but a spray of jagged shards impales their body.<br><br>
        The monster collapses, dragging them into its heap.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p58: {
        text: () => `${getCharacterName()} retreats to the bone doorway, forcing the abomination to squeeze its massive body through.<br><br>
        Bones scrape stone as the creature wedges itself, momentarily stuck.`,
        choices: [
            { text: "Escape while it’s stuck", next: "p59" },
            { text: "Use the moment to attack", next: "p60" }
        ]
    },
    
    p59: {
        text: () => `${getCharacterName()} flees down a side passage while the abomination thrashes behind them.<br><br>
        The corridor slopes downward, air growing colder with each step.<br><br>
        They stumble into a cavern filled with glowing fungi, the air thick with spores.`,
        choices: [
            { text: "Press deeper into the cavern", next: "p61" },
            { text: "Turn back", next: "p55" }
        ]
    },
    
    p60: {
        text: () => `With the abomination wedged in the doorway, ${getCharacterName()} seizes the chance.<br><br>
        They hammer at the skull cluster until bones splinter apart, collapsing the mass into rubble.<br><br>
        The chamber falls silent… but one skull still whispers faintly.`,
        choices: [
            { text: "Listen to the whisper", next: "p62" },
            { text: "Crush the last skull", next: "p63" }
        ]
    },
    
    p61: {
        text: () => `${getCharacterName()} ventures deeper into the glowing cavern.<br><br>
        The bioluminescent fungi cast ghostly blue light, spores drifting lazily in the air.<br><br>
        Each breath feels heavier. Each step, slower. The spores gnaw at their lungs.`,
        choices: [
            { text: "Keep pressing forward", next: "p64" },
            { text: "Try to hold their breath and return", next: "p55" }
        ]
    },
    
    p62: {
        text: () => `${getCharacterName()} bends close to the last intact skull.<br><br>
        A whisper seeps out, raspy and relentless:<br>
        <em>"Break the bones… become the bones…"</em><br><br>
        The air grows colder, and the shadows shift.`,
        choices: [
            { text: "Touch the skull", next: "p65" },
            { text: "Step back immediately", next: "p63" }
        ]
    },
    
    p63: {
        text: () => `${getCharacterName()} crushes the final skull underfoot.<br><br>
        A wail echoes through the labyrinth, shaking dust from the ceiling. The abomination is gone — but something unseen now follows them in silence.`,
        choices: [
            { text: "Continue forward", next: "p66" }
        ]
    },
    
    p64: {
        text: () => `The deeper ${getCharacterName()} goes, the thicker the spores become.<br><br>
        Their vision blurs, and grotesque shapes begin to dance in the glowing haze.<br><br>
        Hands sprout from the walls, clutching at them with fungal growth.`,
        choices: [
            { text: "Tear free and run", next: "gameover" },
            { text: "Let the spores consume them", next: "gameover" }
        ]
    },
    
    p65: {
        text: () => `The instant ${getCharacterName()} lays a hand on the skull, the whisper erupts into a chorus of voices.<br><br>
        Bone shards stitch themselves into their skin, binding, twisting.<br><br>
        They scream as the labyrinth claims them, not as prey — but as a new guardian.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },

    p66: {
        text: () => `${getCharacterName()} walks deeper into the corridor.<br><br>
        The air feels heavy, the silence unnatural. Every step echoes too loudly.<br><br>
        Behind them, faint footsteps follow — perfectly synchronized, but never their own.`,
        choices: [
            { text: "Turn around quickly", next: "p67" },
            { text: "Keep walking and ignore it", next: "p68" }
        ]
    },
    
    p67: {
        text: () => `${getCharacterName()} whirls around — nothing.<br><br>
        Just the dim glow of the labyrinth’s walls.<br><br>
        But when they face forward again, the hallway is subtly different. A new passage splits left.`,
        choices: [
            { text: "Take the new left passage", next: "p69" },
            { text: "Continue straight ahead", next: "p70" }
        ]
    },
    
    p68: {
        text: () => `${getCharacterName()} presses forward, heart racing.<br><br>
        The footsteps behind them grow louder, closer. A breath grazes their neck — but when they look back, emptiness.<br><br>
        The corridor curves sharply into shadow.`,
        choices: [
            { text: "Step into the shadow", next: "p70" },
            { text: "Run forward blindly", next: "gameover" }
        ]
    },
    
    p69: {
        text: () => `The new passage twists sharply, leading into a spiral staircase that plunges downward.<br><br>
        The walls drip with condensation, and faint whispering rises from below.`,
        choices: [
            { text: "Descend the staircase", next: "p71" },
            { text: "Retreat and go straight instead", next: "p70" }
        ]
    },
    
    p70: {
        text: () => `${getCharacterName()} continues straight.<br><br>
        The corridor narrows, pressing in until their shoulders scrape both walls. The unseen footsteps fall silent.<br><br>
        At the end of the path, a faint red glow pulses.`,
        choices: [
            { text: "Approach the glow", next: "p72" },
            { text: "Go back", next: "p67" }
        ]
    },

    p71: {
        text: () => `${getCharacterName()} descends the spiral staircase.<br><br>
        The deeper they go, the louder the whispers become — dozens of voices overlapping, speaking in a language they almost recognize.<br><br>
        The stairwell ends at a circular chamber filled with kneeling statues, their faces covered by hoods.`,
        choices: [
            { text: "Inspect the statues", next: "p73" },
            { text: "Try to sneak past them", next: "p74" }
        ]
    },
    
    p72: {
        text: () => `The red glow at the end of the corridor beats like a heart.<br><br>
        As ${getCharacterName()} approaches, they see it is indeed a massive heart — suspended in chains, pulsing and bleeding light.<br><br>
        Each beat makes the ground tremble.`,
        choices: [
            { text: "Touch the heart", next: "gameover" },
            { text: "Turn back immediately", next: "p67" }
        ]
    },
    
    p73: {
        text: () => `${getCharacterName()} kneels before one of the hooded statues.<br><br>
        Its head turns slowly, stone cracking, revealing an eyeless face.<br><br>
        The others begin to stir.`,
        choices: [
            { text: "Stand still", next: "gameover" },
            { text: "Run past them", next: "p75" }
        ]
    },
    
    p74: {
        text: () => `${getCharacterName()} tiptoes between the statues.<br><br>
        Their breaths are shallow, their heart pounding.<br><br>
        One statue’s hand twitches, but it does not rise. Somehow, they pass through without incident.`,
        choices: [
            { text: "Continue deeper into the chamber", next: "p76" }
        ]
    },
    
    p75: {
        text: () => `${getCharacterName()} dashes between the rising statues, their stone hands clawing at the air.<br><br>
        A heavy arm sweeps past their head, narrowly missing. They throw themselves into a side passage, gasping.`,
        choices: [
            { text: "Catch their breath and move on", next: "p76" }
        ]
    },

    p76: {
        text: () => `${getCharacterName()} finds themselves in a vast chamber lit by hundreds of candles.<br><br>
        An altar stands at the center, carved from obsidian, its surface slick with something dark and wet.<br><br>
        The air thrums with the echo of unseen chanting.`,
        choices: [
            { text: "Approach the altar", next: "p77" },
            { text: "Search the chamber's edges", next: "p78" }
        ]
    },
    
    p77: {
        text: () => `${getCharacterName()} approaches the altar.<br><br>
        The obsidian pulses faintly, as if alive. Strange glyphs carved into its sides writhe when stared at too long.<br><br>
        A dagger rests atop it, its blade dripping red though no hand has touched it.`,
        choices: [
            { text: "Take the dagger", next: "p79" },
            { text: "Step away from the altar", next: "p78" }
        ]
    },
    
    p78: {
        text: () => `${getCharacterName()} avoids the altar, hugging the walls of the chamber.<br><br>
        They find narrow passageways behind heavy curtains, leading deeper into darkness.<br><br>
        The chanting grows louder the further they press.`,
        choices: [
            { text: "Enter the hidden passage", next: "p80" },
            { text: "Go back", next: "p76" }
        ]
    },
    
    p79: {
        text: () => `The instant ${getCharacterName()} touches the dagger, their vision goes black.<br><br>
        They hear voices whispering inside their head, a thousand overlapping tones:<br>
        <em>"Cut. Bleed. Offer."</em><br><br>
        Their hand moves on its own, driving the blade into their chest.`,
        choices: [
            { text: "Game Over", next: "gameover" }
        ]
    },
    
    p80: {
        text: () => `The narrow passage twists and turns until ${getCharacterName()} reaches a small antechamber.<br><br>
        A circle of robed figures kneels here, their chanting soft but relentless. None acknowledge the intruder.<br><br>
        A single doorway lies beyond them.`,
        choices: [
            { text: "Sneak past the robed figures", next: "p81" },
            { text: "Interrupt the chanting", next: "gameover" }
        ]
    },

    p81: {
        text: () => `${getCharacterName()} creeps forward, keeping low.<br><br>
        The robed figures remain kneeling, their heads bowed, faces hidden. Their chanting does not falter, not even as ${getCharacterName()} tiptoes past.<br><br>
        Beyond the circle, a stone archway leads into a sloping tunnel.`,
        choices: [
            { text: "Step through the archway", next: "p82" },
            { text: "Glance back at the cultists", next: "p83" }
        ]
    },
    
    p82: {
        text: () => `The tunnel slopes downward, walls carved with spiraling runes that seem to squirm in the corner of ${getCharacterName()}'s vision.<br><br>
        Each step forward makes the chanting behind them grow louder, not fainter.`,
        choices: [
            { text: "Press deeper into the runes", next: "p84" },
            { text: "Turn back to the cult chamber", next: "p81" }
        ]
    },
    
    p83: {
        text: () => `${getCharacterName()} glances back.<br><br>
        All the cultists now face them — though their bodies never moved. Their hoods reveal only voids where faces should be.<br><br>
        The chanting halts.<br><br>
        Silence suffocates the room.`,
        choices: [
            { text: "Run through the archway", next: "p82" },
            { text: "Freeze in place", next: "gameover" }
        ]
    },
    
    p84: {
        text: () => `The runes glow faintly as ${getCharacterName()} moves forward.<br><br>
        Their mind aches, filling with strange impressions — images of sacrifices, rivers of blood, doors that open only when fed with screams.<br><br>
        The tunnel opens into a cavern split by a chasm.`,
        choices: [
            { text: "Look for a way across", next: "p85" },
            { text: "Turn back to the runes", next: "p82" }
        ]
    },
    
    p85: {
        text: () => `The cavern is vast, the chasm yawning deep below.<br><br>
        A narrow stone bridge spans the gap, cracked and crumbling. On the other side, a massive doorway glows faintly red, pulsing like a wound.`,
        choices: [
            { text: "Cross the bridge", next: "p86" },
            { text: "Climb along the cavern wall", next: "gameover" }
        ]
    },

    p86: {
        text: () => `${getCharacterName()} steps onto the bridge.<br><br>
        Each footfall echoes, stone dust trickling into the void below. The bridge groans, cracks widening.<br><br>
        Halfway across, something stirs beneath the chasm — an immense shadow writhing in the dark.`,
        choices: [
            { text: "Run for the other side", next: "p87" },
            { text: "Turn back", next: "gameover" }
        ]
    },
    
    p87: {
        text: () => `The bridge trembles violently, but ${getCharacterName()} sprints forward, lungs burning.<br><br>
        Just as a fissure splits the bridge behind them, they leap onto solid ground.<br><br>
        The massive doorway looms ahead, glowing like a beating heart.`,
        choices: [
            { text: "Step through the doorway", next: "p88" },
            { text: "Rest a moment first", next: "gameover" }
        ]
    },
    
    p88: {
        text: () => `The doorway swallows ${getCharacterName()} in crimson light.<br><br>
        On the other side is a long corridor lined with stone statues — each depicting hooded cultists in prayer.<br><br>
        As they walk, ${getCharacterName()} realizes the statues' heads slowly turn to follow them.`,
        choices: [
            { text: "Keep walking", next: "p89" },
            { text: "Inspect a statue closely", next: "gameover" }
        ]
    },
    
    p89: {
        text: () => `The corridor stretches endlessly, the statues multiplying with every step.<br><br>
        Finally, a light appears ahead — natural sunlight, piercing through an open arch at the far end.<br><br>
        For the first time, hope surges.`,
        choices: [
            { text: "Run toward the light", next: "p90" },
            { text: "Approach cautiously", next: "gameover" }
        ]
    },
    
    p90: {
        text: () => `${getCharacterName()} bursts out of the archway into blinding sunlight.<br><br>
        A lush meadow stretches before them, birdsong in the air, a clear blue sky overhead.<br><br>
        Relief floods their chest.<br><br>
        But when they turn, the archway is gone. The sky ripples like water. The meadow twists into painted stone walls.<br><br>
        They never left the maze at all.`,
        choices: [
            { text: "Scream in despair", next: "gameover" },
            { text: "Look for another exit", next: "p91" }
        ]
    },

    p91: {
        text: () => `${getCharacterName()} stumbles through the false meadow as the painted sky peels like paper.<br><br>
        Beneath it lies another stone ceiling — the same old maze, mocking them.<br><br>
        Their legs ache, but the path splits again, one side misty, the other sharp and clear.`,
        choices: [
            { text: "Enter the misty path", next: "p92" },
            { text: "Take the clear path", next: "p93" }
        ]
    },
    
    p92: {
        text: () => `The mist clings like spider silk, wrapping around ${getCharacterName()}'s arms and throat.<br><br>
        Shapes dance in the fog: echoes of their past deaths, each corpse of "E-0, E-1, E-2..." staring back.<br><br>
        Their voices whisper: "You'll never leave."`,
        choices: [
            { text: "Ignore them and push forward", next: "p94" },
            { text: "Listen to the whispers", next: "gameover" }
        ]
    },
    
    p93: {
        text: () => `The clear path stretches on forever.<br><br>
        No turns, no doors, no traps — just endless stone corridor. Minutes blur into hours.<br><br>
        Hunger gnaws, thirst burns, and with every blink, the walls stretch farther away.`,
        choices: [
            { text: "Keep walking", next: "gameover" },
            { text: "Turn around", next: "p92" }
        ]
    },
    
    p94: {
        text: () => `The whispers fade, and the mist parts.<br><br>
        ${getCharacterName()} finds a spiral staircase, its steps slick with black ichor.<br><br>
        The air here tastes wrong — sweet, rotting, addictive. Every breath feels like poison sugar.`,
        choices: [
            { text: "Climb the staircase", next: "p95" },
            { text: "Retreat", next: "gameover" }
        ]
    },
    
    p95: {
        text: () => `Each step up the spiral feels like sinking deeper instead of rising.<br><br>
        ${getCharacterName()} looks down and realizes the staircase is infinite — both above and below.<br><br>
        And yet, something glimmers at the "top" — a door etched in gold, pulsing like a heartbeat.`,
        choices: [
            { text: "Reach for the door", next: "p96" },
            { text: "Jump into the abyss", next: "gameover" }
        ]
    },

    p96: {
        text: () => `${getCharacterName()} pushes against the golden door.<br><br>
        Warmth spills out, soft light washing over their battered body.<br><br>
        A voice calls from within: "At last… you've escaped."<br><br>
        Beyond, a lush garden stretches, filled with fountains and songbirds.`,
        choices: [
            { text: "Step into the garden", next: "p97" },
            { text: "Doubt the illusion and hold back", next: "p98" }
        ]
    },
    
    p97: {
        text: () => `The garden embraces ${getCharacterName()} like a mother's arms.<br><br>
        Fruit tastes sweet, fountains soothe their thirst, laughter warms their heart.<br><br>
        But as they relax, the fountains gush blood, the laughter turns to screams, and the fruit writhes into maggots.<br><br>
        They realize too late — the door has vanished behind them.`,
        choices: [
            { text: "Scream for help", next: "gameover" },
            { text: "Run blindly deeper", next: "p99" }
        ]
    },
    
    p98: {
        text: () => `${getCharacterName()} resists the urge to step inside.<br><br>
        Their hand lingers on the golden frame, and it burns, searing flesh.<br><br>
        The "garden" flickers, peeling away to reveal nothing but a charred, endless void.<br><br>
        The voice whispers again: "Coward."`,
        choices: [
            { text: "Leap into the void", next: "gameover" },
            { text: "Force the illusion open further", next: "p99" }
        ]
    },
    
    p99: {
        text: () => `The illusion cracks.<br><br>
        ${getCharacterName()} stumbles into a narrow chamber, walls pulsing like veins.<br><br>
        The air smells of copper and rot. In the center, a massive, beating heart sits chained, each thud shaking the walls.<br><br>
        A whisper in their skull: "Free me."`,
        choices: [
            { text: "Cut the chains", next: "gameover" },
            { text: "Turn away from the heart", next: "p100" }
        ]
    },
    
    p100: {
        text: () => `Turning away, ${getCharacterName()} ignores the heart’s pleas.<br><br>
        Their body feels heavier with each step, guilt gnawing their bones.<br><br>
        At last, another hallway greets them — this one carved with markings they’ve never seen before.<br><br>
        It smells like fresh air.<br><br>
        For the first time, hope might not be a lie.`,
        choices: [
            { text: "Follow the hopeful hallway", next: "safeExit" },
            { text: "Look back at the heart", next: "gameover" }
        ]
    },

    safeExit: {
        text: () => `${getCharacterName()} walks the hopeful hallway.<br><br>
        The air grows lighter, the walls less oppressive.<br><br>
        Finally, they reach a massive stone door, carved with symbols of freedom and light.<br><br>
        Pushing it open, they step outside into a world bathed in sunlight, the sky wide and endless.<br><br>
        They have escaped the labyrinth at last.`,
        choices: [
            { text: "The End - Restart", next: "start" }
        ]
    },

    gameover: {
        text: () => `Such an unfortunate end for ${getCharacterName()}...<br><br>
        The maze claims another soul.`,
        choices: [
            { text: "Restart", next: "start" }
        ]
    }
};

let currentNode = "start";

function showNode(nodeKey) {
    if (nodeKey === "gameover") {
        deathCount++;
        localStorage.setItem("deathCount", deathCount);
    }

    const node = story[nodeKey];
    currentNode = nodeKey;

    document.getElementById("content").innerHTML =
    typeof node.text === "function" ? node.text() : node.text;

    const btn1 = document.getElementById("Choice1");
    const btn2 = document.getElementById("Choice2");

    if (node.choices.length > 0) {
        btn1.style.display = "inline-block";
        btn2.style.display = "inline-block";

        btn1.textContent = node.choices[0].text;
        btn1.onclick = () => showNode(node.choices[0].next);

        if (node.choices[1]) {
            btn2.textContent = node.choices[1].text;
            btn2.onclick = () => showNode(node.choices[1].next);
        } 
        else {
            btn2.style.display = "none";
        }
    } 
    else {
        btn1.style.display = "none";
        btn2.style.display = "none";
    }
}


showNode("start");

