
lazy val root = (sbt.project in file(".")).enablePlugins(PlayScala)

name := "play-angular-seed"

scalaVersion := "2.11.8"

version := "1.0-SNAPSHOT"

resolvers ++= Seq(
  Resolver.sonatypeRepo("releases"),
  Resolver.sonatypeRepo("snapshots")
)

libraryDependencies ++= Seq(
  jdbc,
  cache,
  ws,
  "org.scalatestplus.play" %% "scalatestplus-play" % "1.5.1" % Test,
  "org.webjars" % "squirejs" % "0.1.0" % "test"
)


pipelineStages := Seq(uglify)

UglifyKeys.uglifyOps := { js =>
  Seq((js.sortBy(_._2), "concat.min.js"))
}

MochaKeys.requires += "Setup"

coverageExcludedPackages := "<empty>;controllers.*javascript;.*ReverseApplication.*;.*Routes.*"

coverageMinimum := 50

coverageFailOnMinimum := true

scalacOptions ++= Seq("-feature", "-language:postfixOps")






