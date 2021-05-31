let rr = fn3139()
let result = b - a;

if (a > b) {
    return 0;
} else if (a === 0 || a === 9 || a === 18) {
    switch (rr) {
        case "30-59 RR": result -= 9 * 0.25; break;
        case "60+ RR": result -= 9 * 0.5; break;
    }
} else if (a === 27 || a === 38 || a === 49) {
    switch (rr) {
        case "30-59 RR": result -= 11 * 0.25; break;
        case "60+ RR": result -= 11 * 0.5; break;
    }
} else if (a === 60 || a === 74 || a === 89) {
    switch (rr) {
        case "30-59 RR": result -= 14 * 0.25; break;
        case "60+ RR": result -= 14 * 0.5; break;
    }
} else if (a === 103 || a === 121) {
    switch (rr) {
        case "30-59 RR": result -= 18 * 0.25; break;
        case "60+ RR": result -= 18 * 0.5; break;
    }
} else if (a === 140) {
    switch (rr) {
        case "30-59 RR": result -= 21 * 0.25; break;
        case "60+ RR": result -= 21 * 0.5; break;
    }
} else if (a === 161 || a === 186 || a === 212) {
    switch (rr) {
        case "30-59 RR": result -= 27 * 0.25; break;
        case "60+ RR": result -= 27 * 0.5; break;
    }
} else if (a === 241) {
    switch (rr) {
        case "30-59 RR": result -= 33 * 0.25; break;
        case "60+ RR": result -= 33 * 0.5; break;
    }
} else if (a === 274) {
    switch (rr) {
        case "30-59 RR": result -= 40 * 0.25; break;
        case "60+ RR": result -= 40 * 0.5; break;
    }
} else if (a === 314) {
    switch (rr) {
        case "30-59 RR": result -= 95 * 0.25; break;
        case "60+ RR": result -= 95 * 0.5; break;
    }
} 

return result;
