/************************************ 
 * Exp Recog Task Seen_Notseen *
 ************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.3.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'exp recog task seen_notSeen';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color((1.0000, 0.8431, 0.6078)),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(overall_instructionsRoutineBegin());
flowScheduler.add(overall_instructionsRoutineEachFrame());
flowScheduler.add(overall_instructionsRoutineEnd());
flowScheduler.add(practice_instructionsRoutineBegin());
flowScheduler.add(practice_instructionsRoutineEachFrame());
flowScheduler.add(practice_instructionsRoutineEnd());
const prac_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(prac_trialsLoopBegin(prac_trialsLoopScheduler));
flowScheduler.add(prac_trialsLoopScheduler);
flowScheduler.add(prac_trialsLoopEnd);


flowScheduler.add(main_task_instructionsRoutineBegin());
flowScheduler.add(main_task_instructionsRoutineEachFrame());
flowScheduler.add(main_task_instructionsRoutineEnd());
flowScheduler.add(best_of_luckRoutineBegin());
flowScheduler.add(best_of_luckRoutineEachFrame());
flowScheduler.add(best_of_luckRoutineEnd());
const main_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(main_trialsLoopBegin(main_trialsLoopScheduler));
flowScheduler.add(main_trialsLoopScheduler);
flowScheduler.add(main_trialsLoopEnd);


flowScheduler.add(task_completeRoutineBegin());
flowScheduler.add(task_completeRoutineEachFrame());
flowScheduler.add(task_completeRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'new prac conditions.csv', 'path': 'new prac conditions.csv'},
    {'name': 'github_images/prac_AI_pasture.jpg', 'path': 'github_images/prac_AI_pasture.jpg'},
    {'name': 'github_images/prac_bedroom.jpg', 'path': 'github_images/prac_bedroom.jpg'},
    {'name': 'github_images/prac_mountain.jpg', 'path': 'github_images/prac_mountain.jpg'},
    {'name': 'new main conditions.csv', 'path': 'new main conditions.csv'},
    {'name': 'github_images/AI_bedroom_1.jpg', 'path': 'github_images/AI_bedroom_1.jpg'},
    {'name': 'github_images/AI_bedroom_3_chat.jpg', 'path': 'github_images/AI_bedroom_3_chat.jpg'},
    {'name': 'github_images/AI_bedroom_4.jpg', 'path': 'github_images/AI_bedroom_4.jpg'},
    {'name': 'github_images/AI_highway_1.jpg', 'path': 'github_images/AI_highway_1.jpg'},
    {'name': 'github_images/AI_highway_2.jpg', 'path': 'github_images/AI_highway_2.jpg'},
    {'name': 'github_images/AI_highway_4.jpg', 'path': 'github_images/AI_highway_4.jpg'},
    {'name': 'github_images/AI_highway_5.jpg', 'path': 'github_images/AI_highway_5.jpg'},
    {'name': 'github_images/AI_mountain_1.jpg', 'path': 'github_images/AI_mountain_1.jpg'},
    {'name': 'github_images/AI_mountain_2.jpg', 'path': 'github_images/AI_mountain_2.jpg'},
    {'name': 'github_images/AI_mountain_3.jpg', 'path': 'github_images/AI_mountain_3.jpg'},
    {'name': 'github_images/AI_mountain_5.jpg', 'path': 'github_images/AI_mountain_5.jpg'},
    {'name': 'github_images/AI_pasture_1.jpg', 'path': 'github_images/AI_pasture_1.jpg'},
    {'name': 'github_images/AI_pasture_2.jpg', 'path': 'github_images/AI_pasture_2.jpg'},
    {'name': 'github_images/AI_pasture_3.jpg', 'path': 'github_images/AI_pasture_3.jpg'},
    {'name': 'github_images/AI_pasture_4.jpg', 'path': 'github_images/AI_pasture_4.jpg'},
    {'name': 'github_images/bedroom_1.jpg', 'path': 'github_images/bedroom_1.jpg'},
    {'name': 'github_images/bedroom_3.jpg', 'path': 'github_images/bedroom_3.jpg'},
    {'name': 'github_images/bedroom_4.jpg', 'path': 'github_images/bedroom_4.jpg'},
    {'name': 'github_images/mountain_5.jpg', 'path': 'github_images/mountain_5.jpg'},
    {'name': 'github_images/highway_1.jpg', 'path': 'github_images/highway_1.jpg'},
    {'name': 'github_images/highway_2.jpg', 'path': 'github_images/highway_2.jpg'},
    {'name': 'github_images/highway_4.jpg', 'path': 'github_images/highway_4.jpg'},
    {'name': 'github_images/highway_5.jpg', 'path': 'github_images/highway_5.jpg'},
    {'name': 'github_images/mountain_1.jpg', 'path': 'github_images/mountain_1.jpg'},
    {'name': 'github_images/mountain_2.jpg', 'path': 'github_images/mountain_2.jpg'},
    {'name': 'github_images/mountain_3.jpg', 'path': 'github_images/mountain_3.jpg'},
    {'name': 'github_images/pasture_1.jpg', 'path': 'github_images/pasture_1.jpg'},
    {'name': 'github_images/pasture_2.jpg', 'path': 'github_images/pasture_2.jpg'},
    {'name': 'github_images/pasture_3.jpg', 'path': 'github_images/pasture_3.jpg'},
    {'name': 'github_images/pasture_4.jpg', 'path': 'github_images/pasture_4.jpg'},
    {'name': 'github_images/CL_bedroom_1.jpg', 'path': 'github_images/CL_bedroom_1.jpg'},
    {'name': 'github_images/CL_bedroom_3.jpg', 'path': 'github_images/CL_bedroom_3.jpg'},
    {'name': 'github_images/CL_bedroom_7.jpg', 'path': 'github_images/CL_bedroom_7.jpg'},
    {'name': 'github_images/CL_bedroom_9.jpg', 'path': 'github_images/CL_bedroom_9.jpg'},
    {'name': 'github_images/CL_highway_2.jpg', 'path': 'github_images/CL_highway_2.jpg'},
    {'name': 'github_images/CL_highway_5.jpg', 'path': 'github_images/CL_highway_5.jpg'},
    {'name': 'github_images/CL_highway_6.jpg', 'path': 'github_images/CL_highway_6.jpg'},
    {'name': 'github_images/CL_highway_8.jpg', 'path': 'github_images/CL_highway_8.jpg'},
    {'name': 'github_images/CL_mountain_2.jpg', 'path': 'github_images/CL_mountain_2.jpg'},
    {'name': 'github_images/CL_mountain_4.jpg', 'path': 'github_images/CL_mountain_4.jpg'},
    {'name': 'github_images/CL_mountain_6.jpg', 'path': 'github_images/CL_mountain_6.jpg'},
    {'name': 'github_images/CL_pastures_1.jpg', 'path': 'github_images/CL_pastures_1.jpg'},
    {'name': 'github_images/CL_pastures_3.jpg', 'path': 'github_images/CL_pastures_3.jpg'},
    {'name': 'github_images/CL_pastures_5.jpg', 'path': 'github_images/CL_pastures_5.jpg'},
    {'name': 'github_images/CL_pastures_7.jpg', 'path': 'github_images/CL_pastures_7.jpg'},
    {'name': 'github_images/CL_AI_bedroom_4.jpg', 'path': 'github_images/CL_AI_bedroom_4.jpg'},
    {'name': 'github_images/CL_AI_bedroom_6.jpg', 'path': 'github_images/CL_AI_bedroom_6.jpg'},
    {'name': 'github_images/CL_AI_bedroom_8.jpg', 'path': 'github_images/CL_AI_bedroom_8.jpg'},
    {'name': 'github_images/CL_AI_highway_1.jpg', 'path': 'github_images/CL_AI_highway_1.jpg'},
    {'name': 'github_images/CL_AI_highway_3.jpg', 'path': 'github_images/CL_AI_highway_3.jpg'},
    {'name': 'github_images/CL_AI_highway_4.jpg', 'path': 'github_images/CL_AI_highway_4.jpg'},
    {'name': 'github_images/CL_AI_highway_7.jpg', 'path': 'github_images/CL_AI_highway_7.jpg'},
    {'name': 'github_images/CL_AI_mountain_1.jpg', 'path': 'github_images/CL_AI_mountain_1.jpg'},
    {'name': 'github_images/CL_AI_mountain_3.jpg', 'path': 'github_images/CL_AI_mountain_3.jpg'},
    {'name': 'github_images/CL_AI_mountain_5.jpg', 'path': 'github_images/CL_AI_mountain_5.jpg'},
    {'name': 'github_images/CL_AI_mountain_8.jpg', 'path': 'github_images/CL_AI_mountain_8.jpg'},
    {'name': 'github_images/CL_AI_pastures_2.jpg', 'path': 'github_images/CL_AI_pastures_2.jpg'},
    {'name': 'github_images/CL_AI_pastures_4.jpg', 'path': 'github_images/CL_AI_pastures_4.jpg'},
    {'name': 'github_images/CL_AI_pastures_6.jpg', 'path': 'github_images/CL_AI_pastures_6.jpg'},
    {'name': 'github_images/CL_AI_pastures_8.jpg', 'path': 'github_images/CL_AI_pastures_8.jpg'},
    {'name': 'github_images/NS_AI_airport_1.jpg', 'path': 'github_images/NS_AI_airport_1.jpg'},
    {'name': 'github_images/NS_AI_airport_3.jpg', 'path': 'github_images/NS_AI_airport_3.jpg'},
    {'name': 'github_images/NS_AI_airport_5.jpg', 'path': 'github_images/NS_AI_airport_5.jpg'},
    {'name': 'github_images/NS_AI_amusement_2.jpg', 'path': 'github_images/NS_AI_amusement_2.jpg'},
    {'name': 'github_images/NS_AI_amusement_4.jpg', 'path': 'github_images/NS_AI_amusement_4.jpg'},
    {'name': 'github_images/NS_AI_bridge_1.jpg', 'path': 'github_images/NS_AI_bridge_1.jpg'},
    {'name': 'github_images/NS_AI_bridge_3.jpg', 'path': 'github_images/NS_AI_bridge_3.jpg'},
    {'name': 'github_images/NS_AI_bridge_5.jpg', 'path': 'github_images/NS_AI_bridge_5.jpg'},
    {'name': 'github_images/NS_AI_lighthouse_2.jpg', 'path': 'github_images/NS_AI_lighthouse_2.jpg'},
    {'name': 'github_images/NS_AI_lighthouse_4.jpg', 'path': 'github_images/NS_AI_lighthouse_4.jpg'},
    {'name': 'github_images/NS_airport_2.jpg', 'path': 'github_images/NS_airport_2.jpg'},
    {'name': 'github_images/NS_airport_4.jpg', 'path': 'github_images/NS_airport_4.jpg'},
    {'name': 'github_images/NS_amusement park_1.jpg', 'path': 'github_images/NS_amusement park_1.jpg'},
    {'name': 'github_images/NS_amusement park_3.jpg', 'path': 'github_images/NS_amusement park_3.jpg'},
    {'name': 'github_images/NS_amusement park_5.jpg', 'path': 'github_images/NS_amusement park_5.jpg'},
    {'name': 'github_images/NS_bridge_2.jpg', 'path': 'github_images/NS_bridge_2.jpg'},
    {'name': 'github_images/NS_bridge_4.jpg', 'path': 'github_images/NS_bridge_4.jpg'},
    {'name': 'github_images/NS_lighthouse_1.jpg', 'path': 'github_images/NS_lighthouse_1.jpg'},
    {'name': 'github_images/NS_lighthouse_3.jpg', 'path': 'github_images/NS_lighthouse_3.jpg'},
    {'name': 'github_images/NS_lighthouse_5.jpg', 'path': 'github_images/NS_lighthouse_5.jpg'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.3';
  expInfo['OS'] = window.navigator.platform;
  expInfo['participant'] = expInfo['participant'].replace(/\s+/g, '_');
  expName = expName.replace(/\s+/g, '_');


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var overall_instructionsClock;
var text_3;
var key_resp_3;
var practice_instructionsClock;
var text_2;
var key_resp_2;
var taskClock;
var imageStim;
var seen;
var notSeen;
var mouse;
var main_task_instructionsClock;
var text;
var key_resp;
var best_of_luckClock;
var text_4;
var task_completeClock;
var text_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "overall_instructions"
  overall_instructionsClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'You will be shown a series of images.\n\nFor each image:\n\nDecide whether you have seen the image before or not.\n\n\n\nPress SPACE to continue.',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions"
  practice_instructionsClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Lets begin with a few practice trials first.\n\nUse the mouse to click the answers.\n\n\n\nPress SPACE to begin.',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "task"
  taskClock = new util.Clock();
  imageStim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageStim', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.085], 
    draggable: false,
    size : [0.6, 0.6],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  seen = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'seen',
    text: 'Seen',
    font: 'Times New Roman',
    pos: [-0.3, -0.3],
    size: [0.35, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: new util.Color([-1.0, -1.0, -1.0]),
    fillColor: new util.Color([0.7412, 0.4431, 0.0588]),
    borderColor: new util.Color([0.7412, 0.4431, 0.0588]),
    colorSpace: 'rgb',
    borderWidth: 0,
    opacity: null,
    depth: -1,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  seen.clock = new util.Clock();
  
  notSeen = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'notSeen',
    text: 'Not Seen',
    font: 'Times New Roman',
    pos: [0.3, -0.3],
    size: [0.35, 0.08],
    padding: null,
    anchor: 'center',
    ori: 0.0,
    units: 'height',
    color: new util.Color([-1.0, -1.0, -1.0]),
    fillColor: new util.Color([0.7412, 0.4431, 0.0588]),
    borderColor: new util.Color([0.7412, 0.4431, 0.0588]),
    colorSpace: 'rgb',
    borderWidth: 0,
    opacity: null,
    depth: -2,
    letterHeight: 0.04,
    bold: true,
    italic: false,
  });
  notSeen.clock = new util.Clock();
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "main_task_instructions"
  main_task_instructionsClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Now that you have understood how to perform the task, you may begin.\n\nFor each image, think about whether you have seen the image before or not, and choose your answer carefully.\n\nYou cannot go back or undo your responses.\n\nUse the mouse to click the answers.\n\n\nPress anywhere on the keyboard to begin.',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "best_of_luck"
  best_of_luckClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Best of Luck!',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "task_complete"
  task_completeClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'You have completed the task!\n\nPlease wait while we save your results...',
    font: 'Times New Roman',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.075,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var overall_instructionsMaxDurationReached;
var _key_resp_3_allKeys;
var overall_instructionsMaxDuration;
var overall_instructionsComponents;
function overall_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'overall_instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    overall_instructionsClock.reset();
    routineTimer.reset();
    overall_instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('overall_instructions.started', globalClock.getTime());
    overall_instructionsMaxDuration = null
    // keep track of which components have finished
    overall_instructionsComponents = [];
    overall_instructionsComponents.push(text_3);
    overall_instructionsComponents.push(key_resp_3);
    
    for (const thisComponent of overall_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function overall_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'overall_instructions' ---
    // get current time
    t = overall_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // if text_3 is active this frame...
    if (text_3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of overall_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function overall_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'overall_instructions' ---
    for (const thisComponent of overall_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('overall_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "overall_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practice_instructionsMaxDurationReached;
var _key_resp_2_allKeys;
var practice_instructionsMaxDuration;
var practice_instructionsComponents;
function practice_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practice_instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practice_instructionsClock.reset();
    routineTimer.reset();
    practice_instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('practice_instructions.started', globalClock.getTime());
    practice_instructionsMaxDuration = null
    // keep track of which components have finished
    practice_instructionsComponents = [];
    practice_instructionsComponents.push(text_2);
    practice_instructionsComponents.push(key_resp_2);
    
    for (const thisComponent of practice_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practice_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practice_instructions' ---
    // get current time
    t = practice_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: ['space'], 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practice_instructions' ---
    for (const thisComponent of practice_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practice_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "practice_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var prac_trials;
function prac_trialsLoopBegin(prac_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    prac_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'new prac conditions.csv',
      seed: undefined, name: 'prac_trials'
    });
    psychoJS.experiment.addLoop(prac_trials); // add the loop to the experiment
    currentLoop = prac_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPrac_trial of prac_trials) {
      snapshot = prac_trials.getSnapshot();
      prac_trialsLoopScheduler.add(importConditions(snapshot));
      prac_trialsLoopScheduler.add(taskRoutineBegin(snapshot));
      prac_trialsLoopScheduler.add(taskRoutineEachFrame());
      prac_trialsLoopScheduler.add(taskRoutineEnd(snapshot));
      prac_trialsLoopScheduler.add(prac_trialsLoopEndIteration(prac_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function prac_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(prac_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function prac_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var main_trials;
function main_trialsLoopBegin(main_trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    main_trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'new main conditions.csv',
      seed: undefined, name: 'main_trials'
    });
    psychoJS.experiment.addLoop(main_trials); // add the loop to the experiment
    currentLoop = main_trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMain_trial of main_trials) {
      snapshot = main_trials.getSnapshot();
      main_trialsLoopScheduler.add(importConditions(snapshot));
      main_trialsLoopScheduler.add(taskRoutineBegin(snapshot));
      main_trialsLoopScheduler.add(taskRoutineEachFrame());
      main_trialsLoopScheduler.add(taskRoutineEnd(snapshot));
      main_trialsLoopScheduler.add(main_trialsLoopEndIteration(main_trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function main_trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(main_trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function main_trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var taskMaxDurationReached;
var gotValidClick;
var taskMaxDuration;
var taskComponents;
function taskRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    let trial = snapshot.getCurrentTrial();

    stimType_val = trial.stimType;
    imageType_val = trial.imageType;
    corrAns_val = trial.corrAns;
    imagePath_val = trial.imagePath;
    imageStim.setImage(imagePath_val);   

    //--- Prepare to start Routine 'task' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    taskClock.reset();
    routineTimer.reset();
    taskMaxDurationReached = false;
    // update component parameters for each repeat
    imageStim.setImage(imagePath);
    // reset seen to account for continued clicks & clear times on/off
    seen.reset()
    // reset notSeen to account for continued clicks & clear times on/off
    notSeen.reset()
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.corr = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('task.started', globalClock.getTime());
    taskMaxDuration = null
    // keep track of which components have finished
    taskComponents = [];
    taskComponents.push(imageStim);
    taskComponents.push(seen);
    taskComponents.push(notSeen);
    taskComponents.push(mouse);
    
    for (const thisComponent of taskComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var corr;
var corrAns;
var stimType_val;
var imageType_val;
var corrAns_val;
var imagePath_val;
var _mouseXYs;
function taskRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'task' ---
    // get current time
    t = taskClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imageStim* updates
    if (t >= 0.0 && imageStim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageStim.tStart = t;  // (not accounting for frame time here)
      imageStim.frameNStart = frameN;  // exact frame index
      
      imageStim.setAutoDraw(true);
    }
    
    
    // if imageStim is active this frame...
    if (imageStim.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *seen* updates
    if (t >= 0 && seen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seen.tStart = t;  // (not accounting for frame time here)
      seen.frameNStart = frameN;  // exact frame index
      
      seen.setAutoDraw(true);
    }
    
    
    // if seen is active this frame...
    if (seen.status === PsychoJS.Status.STARTED) {
    }
    
    if (seen.status === PsychoJS.Status.STARTED) {
      // check whether seen has been pressed
      if (seen.isClicked) {
        if (!seen.wasClicked) {
          // store time of first click
          seen.timesOn.push(seen.clock.getTime());
          // store time clicked until
          seen.timesOff.push(seen.clock.getTime());
        } else {
          // update time clicked until;
          seen.timesOff[seen.timesOff.length - 1] = seen.clock.getTime();
        }
        if (!seen.wasClicked) {
          // end routine when seen is clicked
          continueRoutine = false;
          
        }
        // if seen is still clicked next frame, it is not a new click
        seen.wasClicked = true;
      } else {
        // if seen is clicked next frame, it is a new click
        seen.wasClicked = false;
      }
    } else {
      // keep clock at 0 if seen hasn't started / has finished
      seen.clock.reset();
      // if seen is clicked next frame, it is a new click
      seen.wasClicked = false;
    }
    
    // *notSeen* updates
    if (t >= 0 && notSeen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      notSeen.tStart = t;  // (not accounting for frame time here)
      notSeen.frameNStart = frameN;  // exact frame index
      
      notSeen.setAutoDraw(true);
    }
    
    
    // if notSeen is active this frame...
    if (notSeen.status === PsychoJS.Status.STARTED) {
    }
    
    if (notSeen.status === PsychoJS.Status.STARTED) {
      // check whether notSeen has been pressed
      if (notSeen.isClicked) {
        if (!notSeen.wasClicked) {
          // store time of first click
          notSeen.timesOn.push(notSeen.clock.getTime());
          // store time clicked until
          notSeen.timesOff.push(notSeen.clock.getTime());
        } else {
          // update time clicked until;
          notSeen.timesOff[notSeen.timesOff.length - 1] = notSeen.clock.getTime();
        }
        if (!notSeen.wasClicked) {
          // end routine when notSeen is clicked
          continueRoutine = false;
          
        }
        // if notSeen is still clicked next frame, it is not a new click
        notSeen.wasClicked = true;
      } else {
        // if notSeen is clicked next frame, it is a new click
        notSeen.wasClicked = false;
      }
    } else {
      // keep clock at 0 if notSeen hasn't started / has finished
      notSeen.clock.reset();
      // if notSeen is clicked next frame, it is a new click
      notSeen.wasClicked = false;
    }
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
    
    // if mouse is active this frame...
    if (mouse.status === PsychoJS.Status.STARTED) {
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = [seen, notSeen];
          // make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse.clicked_name.push(null);
          }
          // check whether click was in correct object
          if (gotValidClick) {
              mouse.corr.push(0);
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of taskComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function taskRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'task' ---
    for (const thisComponent of taskComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('task.stopped', globalClock.getTime());
    psychoJS.experiment.addData('imagePath', imagePath_val);
    psychoJS.experiment.addData('corrAns', corrAns_val);
    psychoJS.experiment.addData('mouse_time', mouse.time.length ? mouse.time[0] : null);
    psychoJS.experiment.addData('mouse_corr', mouse.corr.length ? mouse.corr[0] : null);
    psychoJS.experiment.addData('mouse_clicked', mouse.clicked_name.length ? mouse.clicked_name[0] : null);
    let response = mouse.clicked_name.length ? mouse.clicked_name[0] : null;
    psychoJS.experiment.addData('response', response);
    let correct = (response === corrAns_val) ? 1 : 0;
    psychoJS.experiment.addData('correct', correct);
    psychoJS.experiment.addData('stimType', stimType_val);
    psychoJS.experiment.addData('imageType', imageType_val);
    psychoJS.experiment.addData('seen.numClicks', seen.numClicks);
    psychoJS.experiment.addData('seen.timesOn', seen.timesOn);
    psychoJS.experiment.addData('seen.timesOff', seen.timesOff);
    psychoJS.experiment.addData('notSeen.numClicks', notSeen.numClicks);
    psychoJS.experiment.addData('notSeen.timesOn', notSeen.timesOn);
    psychoJS.experiment.addData('notSeen.timesOff', notSeen.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);

    
    // the Routine "task" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var main_task_instructionsMaxDurationReached;
var _key_resp_allKeys;
var main_task_instructionsMaxDuration;
var main_task_instructionsComponents;
function main_task_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'main_task_instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    main_task_instructionsClock.reset();
    routineTimer.reset();
    main_task_instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('main_task_instructions.started', globalClock.getTime());
    main_task_instructionsMaxDuration = null
    // keep track of which components have finished
    main_task_instructionsComponents = [];
    main_task_instructionsComponents.push(text);
    main_task_instructionsComponents.push(key_resp);
    
    for (const thisComponent of main_task_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function main_task_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'main_task_instructions' ---
    // get current time
    t = main_task_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    
    // if text is active this frame...
    if (text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({
        keyList: ['space'], 
        waitRelease: false
      });
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of main_task_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function main_task_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'main_task_instructions' ---
    for (const thisComponent of main_task_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('main_task_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "main_task_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var best_of_luckMaxDurationReached;
var best_of_luckMaxDuration;
var best_of_luckComponents;
function best_of_luckRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'best_of_luck' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    best_of_luckClock.reset(routineTimer.getTime());
    routineTimer.add(1.000000);
    best_of_luckMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('best_of_luck.started', globalClock.getTime());
    best_of_luckMaxDuration = null
    // keep track of which components have finished
    best_of_luckComponents = [];
    best_of_luckComponents.push(text_4);
    
    for (const thisComponent of best_of_luckComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function best_of_luckRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'best_of_luck' ---
    // get current time
    t = best_of_luckClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    
    // if text_4 is active this frame...
    if (text_4.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_4.tStop = t;  // not accounting for scr refresh
      text_4.frameNStop = frameN;  // exact frame index
      // update status
      text_4.status = PsychoJS.Status.FINISHED;
      text_4.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of best_of_luckComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function best_of_luckRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'best_of_luck' ---
    for (const thisComponent of best_of_luckComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('best_of_luck.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (best_of_luckMaxDurationReached) {
        best_of_luckClock.add(best_of_luckMaxDuration);
    } else {
        best_of_luckClock.add(1.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var task_completeMaxDurationReached;
var task_completeMaxDuration;
var task_completeComponents;
function task_completeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'task_complete' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    task_completeClock.reset(routineTimer.getTime());
    routineTimer.add(1.300000);
    task_completeMaxDurationReached = false;
    // update component parameters for each repeat
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
    
    // Generate filename for results
    let filename = expInfo['participant'] + '_' + expName + '_' + expInfo['date'] + '.csv';
    
    // Extract data object from experiment
    let rows = psychoJS.experiment._trialsData;

    let allKeys = new Set();
    rows.forEach(row => {
      Object.keys(row).forEach(k => allKeys.add(k));
    });
    let headersArr = Array.from(allKeys);

    let headers = headersArr.join(',');

    let data = rows.map(row =>
      headersArr.map(key => (row[key] !== undefined ? row[key] : '')).join(',')
    ).join('\n');

    data = headers + '\n' + data;
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'uTA5So5qGmsE', // * UPDATE WITH YOUR DATAPIPE EXPERIMENT ID *
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // Log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('task_complete.started', globalClock.getTime());
    task_completeMaxDuration = null
    // keep track of which components have finished
    task_completeComponents = [];
    task_completeComponents.push(text_5);
    
    for (const thisComponent of task_completeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function task_completeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'task_complete' ---
    // get current time
    t = task_completeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    
    // if text_5 is active this frame...
    if (text_5.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 1.3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      text_5.tStop = t;  // not accounting for scr refresh
      text_5.frameNStop = frameN;  // exact frame index
      // update status
      text_5.status = PsychoJS.Status.FINISHED;
      text_5.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of task_completeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function task_completeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'task_complete' ---
    for (const thisComponent of task_completeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('task_complete.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (task_completeMaxDurationReached) {
        task_completeClock.add(task_completeMaxDuration);
    } else {
        task_completeClock.add(1.300000);
    }
    // Routines running outside a loop should always advance the datafile row
    psychoJS.experiment.nextEntry(snapshot);
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
