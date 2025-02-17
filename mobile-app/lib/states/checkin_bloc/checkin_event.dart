part of 'checkin_bloc.dart';

abstract class CheckInEvent extends Equatable {
  const CheckInEvent();

  @override
  List<Object> get props => [];
}

class FetchLocationEvent extends CheckInEvent {
  final SafeEntryBeforeCheckInScreenArgs args;

  FetchLocationEvent({@required this.args});
}

class CheckEvent extends CheckInEvent {
  final Location location;

  CheckEvent({@required this.location});
}
