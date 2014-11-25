import Ember from 'ember';

var SeattleController = Ember.Controller.extend({

  tempNoParking: Ember.Object.create({
    content: "Parking is not allowed during the times and dates posted on the temporary “No Parking” signs.",
    placement: "right"
  }),

  paidParking: Ember.Object.create({
    content: "Paid parking is generally in effect 8 a.m. to 6 p.m., Monday through Saturday. Seven areas have extended parking hours until 8 p.m. These are the Commercial Core, Belltown, International District, Pike-Pine, Capitol Hill, Uptown & the U-District. Please read signs carefully.",
    placement: "right"
  }),

  restrictedParking: Ember.Object.create({
    content: "Vehicles with RPZ permits, issued by the City of Seattle, can park anytime in these spaces for up to 72 hours. Vehicles without permits are limited to the time posted.",
    placement: "right"
  }),

  timeLimitedParking: Ember.Object.create({
    content: "Parking is allowed for up to the maximum hours posted. Vehicles must move off the block (i.e. around the corner) when time expires.",
    placement: "right"
  }),

  carpoolParking: Ember.Object.create({
    content: "Do not park in designated carpool parking zones during the posted hours, unless your vehicle has a Carpool Parking Permit issued by the City of Seattle.",
    placement: "right"
  }),

  noParking: Ember.Object.create({
    content: "Parking is not allowed in these zones.",
    placement: "right"
  }),

  unrestrictedParking: Ember.Object.create({
    content: "No permit or payment is required in these zones. Do not park a vehicle on the same block of any city street longer than 72 hours.",
    placement: "right"
  }),

  amRestrictedParking: Ember.Object.create({
    content: "Parking is restricted in the morning. Do not park during the posted times. Hours vary, so read signs closely.",
    placement: "right"
  }),

  ampmRestrictedParking: Ember.Object.create({
    content: "Parking is restricted in the morning & afternoon. Do not park during the posted times. Hours vary, so read signs closely.",
    placement: "right"
  }),

  pmRestrictedParking: Ember.Object.create({
    content: "Parking is restricted in the afternoon & evening. Do not park during the posted times. Hours vary, so read signs closely." ,
    placement: "right"
  })
});

export default SeattleController;


