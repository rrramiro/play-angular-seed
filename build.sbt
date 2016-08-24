
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
  "org.webjars" % "angularjs" % "1.5.7",
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


//
// sbt-web configuration
// https://github.com/sbt/sbt-web
//

// Configure the steps of the asset pipeline (used in stage and dist tasks)
// rjs = RequireJS, uglifies, shrinks to one file, replaces WebJars with CDN
// digest = Adds hash to filename
// gzip = Zips all assets, Asset controller serves them automatically when client accepts them
//pipelineStages := Seq(rjs, digest, gzip)

// RequireJS with sbt-rjs (https://github.com/sbt/sbt-rjs#sbt-rjs)
// ~~~
//RjsKeys.paths += ("jsRoutes" -> ("/jsroutes" -> "empty:"))

//RjsKeys.mainModule := "main"

// Asset hashing with sbt-digest (https://github.com/sbt/sbt-digest)
// ~~~
// md5 | sha1
//DigestKeys.algorithms := "md5"
//includeFilter in digest := "..."
//excludeFilter in digest := "..."

// HTTP compression with sbt-gzip (https://github.com/sbt/sbt-gzip)
// ~~~
// includeFilter in GzipKeys.compress := "*.html" || "*.css" || "*.js"
// excludeFilter in GzipKeys.compress := "..."

// JavaScript linting with sbt-jshint (https://github.com/sbt/sbt-jshint)
// ~~~
// JshintKeys.config := ".jshintrc"
//emojiLogs

