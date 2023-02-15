let repeat = 10000;
      let stay = 0;

      for (let i = 0; i < repeat; i++) {
        // Step 1
        // Place the prize behind a door
        let winningDoor = Math.ceil(Math.random() * 3);
        document.write(
          "<p>The winning door is number " + winningDoor + ".</p>"
        );

        // Step 2
        // Choose a door
        let choice = Math.ceil(Math.random() * 3);
        document.write("<p>The chosen door is number " + choice + ".</p>");

        // Step 3
        //removedDoor != winningDoor
        //removedDoor != choice
        //removedDoor is 1, 2 or 3

        // Using do-while loop
        let removedDoor;

        do {
          removedDoor = Math.ceil(Math.random() * 3);
        } while (removedDoor === winningDoor || removedDoor === choice);

        document.write(
          "<p>The removed door is number " + removedDoor + ".</p>"
        );
        //Step 4
        //Display the results
        if (winningDoor === choice) {
          document.write("<h2>STAY!</h2>");
          stay++;
        } else {
          document.write("<h2>SWITCH!</h2>");
        }
        document.write("<hr>");
      }

      let percent = ((stay / repeat) * 100).toFixed(2);
      document.write(
        "<p>Percent STAY is the right choice is " + percent + "%.</p>"
      );