// Program data transcribed from Luca's S&C coach PDF. Edit here when the coach updates it.
const GYM = {
  phases: [
    {
      id: 'phase1',
      name: 'In Season',
      subtitle: '',
      note: 'Still training with his team and playing friendlies.',
      rpe: '8',
      workouts: [
        {
          id: 'w1',
          name: 'Workout 1',
          blocks: [
            {
              group: '1',
              exercises: [
                { label: '1a', name: 'HexBar Deadlift', rpe: '8', sets: '3', reps: '5', rest: '—', tempo: '3.1.<1.1' },
                { label: '1b', name: 'Box Jump → Land', rpe: '8', sets: '3', reps: '5', rest: '2min', tempo: 'Max Intent' }
              ]
            },
            {
              group: '2',
              exercises: [
                { label: '2a', name: 'Bench Press', rpe: '8', sets: '3', reps: '8', rest: '—', tempo: '3.1.1.1' },
                { label: '2b', name: 'DB Row', rpe: '8', sets: '3', reps: '8 p.s.', rest: '2min', tempo: '3.1.1.0' }
              ]
            },
            {
              group: '3',
              exercises: [
                { label: '3a', name: 'Cossack Squat', rpe: '8', sets: '3', reps: '6 p.s.', rest: '—', tempo: '2.0.<1.1' },
                { label: '3b', name: 'Skater → Vertical Jump', rpe: '8', sets: '3', reps: '20', rest: '90sec', tempo: '—' }
              ]
            },
            {
              group: '4',
              exercises: [
                { label: '4a', name: 'Long-Lever Bridge', rpe: '8', sets: '3', reps: '15sec', rest: '—', tempo: 'N/A' },
                { label: '4b', name: 'Landmine Rotations', rpe: '8', sets: '3', reps: '10', rest: '90sec', tempo: '3.0.1.1' }
              ]
            }
          ]
        },
        {
          id: 'w2',
          name: 'Workout 2',
          blocks: [
            {
              group: '1',
              exercises: [
                { label: '1a', name: 'BB Hip Thrust', rpe: '8', sets: '3', reps: '8', rest: '—', tempo: '3.2.<1.0' },
                { label: '1b', name: 'Triple Broad Jump', rpe: '8', sets: '3', reps: '2 (6 jumps)', rest: '2min', tempo: 'Max Intent' }
              ]
            },
            {
              group: '2',
              exercises: [
                { label: '2a', name: 'Pull-Up', rpe: '8', sets: '3', reps: '1RIR', rest: '—', tempo: '2.1.<1.0' },
                { label: '2b', name: 'Assisted Pogo', rpe: '8', sets: '3', reps: '15', rest: '90sec', tempo: 'Max Intent' }
              ]
            },
            {
              group: '3',
              exercises: [
                { label: '3a', name: 'SS Overcoming Isometric', rpe: '8', sets: '3', reps: '8sec', rest: '—', tempo: 'N/A' },
                { label: '3b', name: 'Alternating SS Pogos', rpe: '8', sets: '3', reps: '14', rest: '2min', tempo: 'Max Intent' }
              ]
            },
            {
              group: '4',
              exercises: [
                { label: '4a', name: 'MB Depth Drop', rpe: '8', sets: '3', reps: '4', rest: '—', tempo: 'N/A' },
                { label: '4b', name: 'Suitcase Carry', rpe: '8', sets: '3', reps: '20m p.s.', rest: '90sec', tempo: '—' }
              ]
            }
          ]
        },
        {
          id: 'w3',
          name: 'Workout 3',
          blocks: [
            {
              group: '1',
              exercises: [
                { label: '1a', name: 'Landing Complex', rpe: '8', sets: '3', reps: '2 p.s.', rest: '1min', tempo: 'N/A', glossary: 'Landing Complex' },
                { label: '1b', name: 'Drop Jump', rpe: '8', sets: '3', reps: '3', rest: '1min', tempo: 'Max Intent' }
              ]
            },
            {
              group: '2',
              exercises: [
                { label: '2a', name: 'BB Squat', rpe: '8', sets: '3', reps: '8', rest: '—', tempo: '3.0.<1.1' },
                { label: '2b', name: 'DB SA OH Press', rpe: '8', sets: '3', reps: '8 p.s.', rest: '90sec', tempo: '2.1.<1.1' }
              ]
            },
            {
              group: '3',
              exercises: [
                { label: '3a', name: 'Inverted Row', rpe: '8', sets: '3', reps: '15', rest: '—', tempo: '2.1.<1.0' },
                { label: '3b', name: 'SL RDL', rpe: '8', sets: '3', reps: '10 p.s.', rest: '90sec', tempo: '3.0.1.1' }
              ]
            },
            {
              group: '4',
              exercises: [
                { label: '4a', name: 'Gwiz Jump', rpe: '8', sets: '3', reps: '2 p.s.', rest: '—', tempo: 'Max Intent' },
                { label: '4b', name: 'Palloff Press', rpe: '8', sets: '3', reps: '6 p.s.', rest: '1min', tempo: '6.0.6.1' }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'phase2',
      name: 'Off Season',
      subtitle: '',
      note: 'Can go heavier.',
      rpe: '8-9',
      workouts: [
        {
          id: 'w1',
          name: 'Workout 1',
          blocks: [
            {
              group: '1',
              exercises: [
                { label: '1a', name: 'BB Squat', rpe: '8-9', sets: '4', reps: '5', rest: '20sec', tempo: '3.1.<1.1' },
                { label: '1b', name: 'DB CMJ', rpe: '8-9', sets: '4', reps: '5', rest: '3min', tempo: 'Max Intent' }
              ]
            },
            {
              group: '2',
              exercises: [
                { label: '2a', name: 'DB Incline Press', rpe: '8-9', sets: '3', reps: '10', rest: '—', tempo: '3.1.1.0' },
                { label: '2b', name: 'DB Bicep Curl', rpe: '8-9', sets: '3', reps: '15', rest: '90sec', tempo: '3.0.1.0' }
              ]
            },
            {
              group: '3',
              exercises: [
                { label: '3a', name: 'BB RDL', rpe: '8-9', sets: '3', reps: '8', rest: '30sec', tempo: '3.1.1.0' },
                { label: '3b', name: 'Box-to-broad Jump', rpe: '8-9', sets: '3', reps: '3', rest: '90sec', tempo: 'Max Intent' }
              ]
            },
            {
              group: '4',
              exercises: [
                { label: '4a', name: 'Leg Extension', rpe: '8-9', sets: '3', reps: '20', rest: '30sec', tempo: '2.0.<1.0' },
                { label: '4b', name: 'Farmers Carry', rpe: '8-9', sets: '3', reps: '20m', rest: '1min', tempo: 'N/A' }
              ]
            }
          ]
        },
        {
          id: 'w2',
          name: 'Workout 2',
          blocks: [
            {
              group: '1',
              exercises: [
                { label: '1', name: 'BB Bench Press', rpe: '8-9', sets: '5', reps: '5', rest: '3min', tempo: '3.0.<1.1' }
              ]
            },
            {
              group: '2',
              exercises: [
                { label: '2a', name: 'Pull-Up (neutral grip)', rpe: '8-9', sets: '3', reps: '1RIR', rest: '—', tempo: '2.0.<1.0' },
                { label: '2b', name: 'DB Lateral Raise', rpe: '8-9', sets: '3', reps: '15', rest: '90sec', tempo: '3.0.<1.1' }
              ]
            },
            {
              group: '3',
              exercises: [
                { label: '3a', name: 'DB Split Squat', rpe: '8-9', sets: '3', reps: '8 p.s.', rest: '30sec', tempo: '2.0.<1.1' },
                { label: '3b', name: 'Hamstring Curl', rpe: '8-9', sets: '3', reps: '12', rest: '90sec', tempo: '3.0.<1.0' }
              ]
            },
            {
              group: '4',
              exercises: [
                { label: '4a', name: 'Copenhagen', rpe: '8-9', sets: '3', reps: '8 p.s.', rest: '—', tempo: '2.0.1.1' },
                { label: '4b', name: 'Calve Raise (BW)', rpe: '8-9', sets: '3', reps: '15-20', rest: '—', tempo: '3.1.1.1' },
                { label: '4c', name: 'Bench Dips', rpe: '8-9', sets: '3', reps: '1RIR', rest: '1min', tempo: '3.0.1.1' }
              ]
            }
          ]
        },
        {
          id: 'w3',
          name: 'Workout 3',
          blocks: [
            {
              group: '1',
              exercises: [
                { label: '1a', name: 'BB Deadlift', rpe: '8-9', sets: '4', reps: '5', rest: '20sec', tempo: '2.2.1.1' },
                { label: '1b', name: 'Seated Box Jump', rpe: '8-9', sets: '4', reps: '3', rest: '2min', tempo: 'Max Intent' }
              ]
            },
            {
              group: '2',
              exercises: [
                { label: '2a', name: 'DB Row', rpe: '8-9', sets: '3', reps: '10 p.s.', rest: '—', tempo: '3.0.1.1' },
                { label: '2b', name: 'Deficit Push-Up', rpe: '8-9', sets: '3', reps: '1RIR', rest: '90sec', tempo: '3.1.1.0' }
              ]
            },
            {
              group: '3',
              exercises: [
                { label: '3a', name: 'Walking Lunges', rpe: '8-9', sets: '3', reps: '16-20', rest: '30sec', tempo: '2.0.1.1' },
                { label: '3b', name: 'DB Shoulder Press', rpe: '8-9', sets: '3', reps: '10', rest: '1min', tempo: '3.0.1.0' }
              ]
            },
            {
              group: '4',
              exercises: [
                { label: '4a', name: 'Long-Lever Bridge', rpe: '8-9', sets: '3', reps: '15sec', rest: '—', tempo: 'N/A' },
                { label: '4b', name: 'Dish-Hold', rpe: '8-9', sets: '3', reps: '15sec', rest: '—', tempo: 'N/A' },
                { label: '4c', name: 'Laying Leg Lifts', rpe: '8-9', sets: '3', reps: '15', rest: '1min', tempo: '3.0.1.0' }
              ]
            }
          ]
        }
      ]
    }
  ],

  conditioning: {
    id: 'conditioning',
    name: 'Conditioning',
    subtitle: 'Off-Season',
    note: 'Choose 2-3 per week.',
    sections: [
      {
        title: 'Continuous / Aerobic',
        items: [
          {
            name: 'Bike / Swim / Jog / Incline walk',
            pick: 'choose 1',
            chips: [
              { k: 'Sets', v: '1' },
              { k: 'Reps', v: '30-60min' },
              { k: 'Intensity', v: 'Zone 2 (140-145bpm)' }
            ]
          }
        ]
      },
      {
        title: 'Interval — Aerobic',
        items: [
          {
            name: 'Norwegian 4x4',
            chips: [
              { k: 'Sets', v: '4' },
              { k: 'Reps', v: '4' },
              { k: 'Work', v: '4min @170-185bpm' },
              { k: 'Rest', v: '4min @120-130bpm' }
            ]
          }
        ]
      },
      {
        title: 'Interval — Anaerobic',
        items: [
          {
            name: 'Bike / Rower / Assault Bike',
            pick: 'choose 1',
            chips: [
              { k: 'Sets', v: '5-10' },
              { k: 'Reps', v: '15sec on / 45sec off' },
              { k: 'Intensity', v: '100% on, 30% off' }
            ]
          }
        ]
      },
      {
        title: 'Interval — Aerobic & Anaerobic',
        items: [
          {
            name: 'Top-ups',
            sub: 'I prescribe for Premier Men',
            chips: [{ k: 'Sets', v: '2-3' }],
            steps: [
              'Box-Box x2 (there and back twice) @50% — 30sec rest',
              'Box-Half x2 @80% — 45sec rest',
              'Box-Box x2 @60% — 30sec rest',
              'Box-Half x1 (there and back once) @100% — 2min rest'
            ]
          },
          {
            name: 'Union Jack',
            chips: [{ k: 'Sets', v: '3-4' }],
            steps: [
              'Start on the half way point.',
              'Run to one corner and back @50%',
              "As soon as you're back at half way, run to the outline and back @80-90%",
              'Repeat for every corner. That is one set. Rest 3 min before starting your next set'
            ]
          }
        ]
      }
    ]
  },

  glossary: [
    { term: 'Tempo', def: 'way down | pause at bottom | way up | pause at top (e.g., 3.1.1.0)' },
    { term: 'RIR', def: 'Repetitions in reserve; how many left until perfect technique can\u2019t be maintained (-1 per fortnight). After two weeks of 0 RIR, have a deload week.' },
    { term: 'RPE', def: 'Rating of Perceived Exertion; difficulty out of 10.' },
    { term: 'p.s.', def: 'per side' },
    { term: 'Supersets', def: 'in same column | Xa & Xb.' },
    { term: 'SL', def: 'Single-Leg' },
    { term: 'SA', def: 'Single-Arm' },
    { term: 'OH', def: 'Overhead' },
    { term: 'Landing Complex', def: 'Attached a band to a squat rack. Put it around your waist and step away from squat rack. Do 2 SL broad jumps and lateral jumps p.s. toward the squat rack. This increases the deceleration demands of the exercises.' },
    { term: 'N/A', def: 'Not Applicable' },
    { term: 'BW', def: 'Bodyweight' }
  ]
};
