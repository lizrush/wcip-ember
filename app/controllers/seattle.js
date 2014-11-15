import Ember from 'ember';

var SeattleController = Ember.Controller.extend({

  tempNoParking: Ember.Object.create({
    content: "Parking is not allowed during the times and datesposted on the temporary “No Parking” signs.",
    placement: "top"
  }),

  paidParking: Ember.Object.create({
    content: "Paid parking is generally in effect 8 a.m. to 6 p.m.,Monday through Saturday. Seven areas have extended parking hours until 8 p.m. These are the Commercial Core, Belltown, International District, Pike-Pine, Capitol Hill, Uptown & the U-District. Please readsigns carefully.",
    placement: "top"
  }),

  restrictedParking: Ember.Object.create({
    content: "Vehicles with RPZ permits, issued by the City of Seattle, can park anytime in these spaces for up to 72 hours. Vehicles without permits are limitedto the time posted.",
    placement: "top"
  }),

  timeLimitedParking: Ember.Object.create({
    content: "Parking is allowed for up to the  maximum hoursposted. Vehicles must move off the block (i.e. around the corner) when time  expires.",
    placement: "top"
  }),

  carpoolParking: Ember.Object.create({
    content: "Do not park in designated carpool parking zones duringthe posted hours, unless your vehicle has a Carpool Parking Permit issued by the City of Seattle.",
    placement: "top"
  }),

  noParking: Ember.Object.create({
    content: "Parking is not allowed in these zones.",
    placement: "top"
  }),

  unrestrictedParking: Ember.Object.create({
    content: "No permit or payment is required in these zones.Do not park a vehicle on the same block of any city street longer than 72 hours.",
    placement: "top"
  }),

  amRestrictedParking: Ember.Object.create({
    content: "Parking is restricted in the morning. Do not park duringthe posted times. Hours vary, so read signs closely.",
    placement: "top"
  }),

  ampmRestrictedParking: Ember.Object.create({
    content: "Parking is restricted in the morning & afternoon. Do not park during the posted times. Hours vary, so read signs closely.",
    placement: "top"
  }),

  pmRestrictedParking: Ember.Object.create({
    content: "Parking is restricted in the afternoon & evening. Do not park during the posted times. Hours vary, so read signs closely." ,
    placement: "top"
  })
});

export default SeattleController;


